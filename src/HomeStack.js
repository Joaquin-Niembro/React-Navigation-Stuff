import React, {useContext} from 'react';
import {Text, TouchableOpacity, FlatList, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthContext} from './AuthProvider';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Stack = createStackNavigator();
import Center from './Center';
import faker from 'faker';
import {addProductRoutes} from './AddProductRoutes';
const Feed = ({navigation: {navigate}}) => {
  return (
    <Center>
      <FlatList
        style={{width: '100%'}}
        keyExtractor={(product, index) => product + index}
        data={Array.from(Array(50), () => faker.commerce.product())}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigate('Product', {name: item})}>
            <Text style={{fontSize: 25, color: '#2c4358', textAlign: 'center'}}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </Center>
  );
};

const HomeStack = () => {
  const {logout} = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#2c4358',
        },
      }}>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          headerRight: () => (
            <TouchableOpacity onPress={() => logout()}>
              <MaterialCommunityIcons
                name="logout"
                size={30}
                color="#FFF"
                style={{marginRight: 10}}
              />
            </TouchableOpacity>
          ),
        }}
      />
      {addProductRoutes(Stack)}
    </Stack.Navigator>
  );
};

export default HomeStack;

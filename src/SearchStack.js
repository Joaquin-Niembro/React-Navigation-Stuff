import React, {useState} from 'react';
import {Text, Button, TouchableOpacity, FlatList} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Center from './Center';
import faker from 'faker';
import {addProductRoutes} from './AddProductRoutes';
function Search({navigation: {navigate}}) {
  const [show, setShow] = useState(false);
  return (
    <Center>
      <Button
        title="Search Products"
        onPress={() => {
          setShow((prev) => !prev);
        }}
      />

      {show ? (
        <FlatList
          style={{width: '100%'}}
          keyExtractor={(product, index) => product + index}
          data={Array.from(Array(50), () => faker.commerce.product())}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigate('Product', {name: item})}>
              <Text
                style={{fontSize: 25, color: '#2c4358', textAlign: 'center'}}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      ) : null}
    </Center>
  );
}
const SearchStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#2f3b39',
        },
      }}>
      <Stack.Screen name="Search" component={Search} />
      {addProductRoutes(Stack)}
    </Stack.Navigator>
  );
};

export default SearchStack;

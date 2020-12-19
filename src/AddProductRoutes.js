import React, {useRef, useEffect} from 'react';
import {TouchableOpacity, Text, Button} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Center from './Center';
const Product = ({
  route: {
    params: {name},
  },
  navigation: {navigate},
}) => {
  return (
    <Center>
      <Text>Product:{name} </Text>
      <Button title={`Edit ${name}`} onPress={() => navigate('Edit', {name})} />
    </Center>
  );
};
const apicall = (x) => {
  return x;
};
const EditProduct = ({route, navigation}) => {
  const submit = useRef(() => {});
  submit.current = () => {
    apicall('New Item');
    navigation.goBack();
  };
  useEffect(() => {
    navigation.setParams({submit});
  }, []);
  return (
    <Center>
      <Text>editing {route.params.name}</Text>
    </Center>
  );
};
export const addProductRoutes = (Stack) => {
  return (
    <>
      <Stack.Screen
        name="Product"
        component={Product}
        options={({route}) => ({
          headerTitle: `${route.params.name}`,
        })}
      />
      <Stack.Screen
        name="Edit"
        component={EditProduct}
        options={({route}) => ({
          headerTitle: `Edit ${route.params.name}`,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                if (route.params.submit) {
                  route.params.submit.current();
                }
              }}>
              <MaterialCommunityIcons
                name="check-decagram"
                size={30}
                color="#FFF"
                style={{marginRight: 10}}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </>
  );
};

import React, {useState, useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ActivityIndicator, Button, Text} from 'react-native';
const Stack = createStackNavigator();
import Center from './Center';
import {AuthContext} from './AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppTabs from './AppTabs';
const Login = ({navigation: {navigate}}) => {
  const {login} = useContext(AuthContext);

  return (
    <Center>
      <Text>Login</Text>
      <Button title="Log me in" onPress={() => login()} />
      <Button title="Go to Register" onPress={() => navigate('Register')} />
    </Center>
  );
};
const Register = ({navigation: {navigate}}) => {
  return (
    <Center>
      <Text>Register</Text>
      <Button title="Go to Login" onPress={() => navigate('Login')} />
    </Center>
  );
};

export const Routes = () => {
  const [loading, setLoading] = useState(true);
  const {user} = useContext(AuthContext);
  useEffect(() => {
    const fetch = async () => {
      try {
        const user = await AsyncStorage.getItem('user');
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);
  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" color="#0000ff" />
      </Center>
    );
  }

  return (
    <NavigationContainer>
      {user ? (
        <AppTabs />
      ) : (
        <Stack.Navigator screenOptions={{header: () => null}}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerTitle: 'Sign In'}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerTitle: 'Sign Up'}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

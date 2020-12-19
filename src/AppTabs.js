import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from './HomeStack';
import SearchStack from './SearchStack';
import DetailsStack from './DetailsStack';
const Tabs = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 15,
        },
        tabStyle: {
          padding: 5,
        },
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'md-home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'account-search' : 'book-search';
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Details') {
            iconName = focused ? 'account-details' : 'card-account-details-outline';
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Search" component={SearchStack} />
      <Tabs.Screen name="Details" component={DetailsStack} />
    </Tabs.Navigator>
  );
};

export default AppTabs;

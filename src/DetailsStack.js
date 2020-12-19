import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Center from './Center';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Drawer = createDrawerNavigator();
const Details = () => {
  return (
    <Center>
      <Text>Drawer Home</Text>
    </Center>
  );
};
const Info = () => {
  return (
    <Center>
      <Text>Info</Text>
    </Center>
  );
};
const Item = ({icon, title, RouteToGo, navigation}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomColor: '#2c4358',
        borderBottomWidth: 0.5,
        padding: 10,
      }}
      onPress={() => navigation.navigate(RouteToGo)}>
      <MaterialCommunityIcons
        name={icon}
        size={30}
        color="#2f3b39"
        style={{marginRight: 10}}
      />
      <Text style={{color: '#2f3b39', fontSize: 20, fontWeight: 'bold'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
function CustomDrawerContent({navigation}) {
  return (
    <>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
          padding: 15,
        }}>
        <MaterialCommunityIcons
          name="basketball-hoop"
          size={50}
          color="#2f3b39"
          style={{marginRight: 10}}
        />
        <Text style={{color: '#2f3b39', fontSize: 35, fontWeight: 'bold'}}>
          Basketball
        </Text>
      </View>
      <DrawerItem
        label={() => (
          <Item
            navigation={navigation}
            icon="book-variant"
            title="Details"
            RouteToGo="Info"
          />
        )}
      />
      <DrawerItem
        label={() => (
          <Item
            navigation={navigation}
            icon="information"
            title="information"
            RouteToGo="Details"
          />
        )}
      />
    </>
  );
}
const DetailsStack = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#d1e4dd',
        width: '80%',
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Details"
        component={Details}
        options={{
          drawerLabel: () => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="book-variant"
                  size={30}
                  color="#2f3b39"
                  style={{marginRight: 10}}
                />
                <Text
                  style={{color: '#2f3b39', fontSize: 20, fontWeight: 'bold'}}>
                  Details
                </Text>
              </View>
            );
          },
        }}
      />
      <Drawer.Screen
        name="Info"
        component={Info}
        options={{
          drawerLabel: () => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="information"
                  size={30}
                  color="#2f3b39"
                  style={{marginRight: 10}}
                />
                <Text
                  style={{color: '#2f3b39', fontSize: 20, fontWeight: 'bold'}}>
                  information
                </Text>
              </View>
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DetailsStack;

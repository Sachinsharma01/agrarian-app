import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import CustomDrawer from '../components/drawer';
import BottomTabNavigation from './BottomTabNavigation';
import Profile from '../screens/profile';
import AgriStore from '../screens/agristore';
import Settings from '../screens/settings';
import config from '../config';
import KisanVedika from '../screens/kisanVedika/index';
import Post from '../screens/post';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: config.constants.primaryColor,
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigation}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="AgriStore"
        component={AgriStore}
        options={{
          drawerIcon: ({color}) => (
            <FeatherIcons name="shopping-bag" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Kisan Vedika"
        component={KisanVedika}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="people-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Help"
        component={Settings}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="md-help-circle-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;

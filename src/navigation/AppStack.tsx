import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomDrawer from '../components/drawer';
import BottomTabNavigation from './BottomTabNavigation';
import Profile from '../screens/profile';
import AgriStore from '../screens/agristore';
import Settings from '../screens/settings';
import config from '../config';
import PostStack from './PostStack';
import Feedback from '../screens/feedback';
import HelpAndSupport from '../screens/help';

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
          headerShown: true,
          headerShadowVisible: true,
          drawerIcon: ({color}) => (
            <FeatherIcons name="shopping-bag" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Kisan Vedika"
        component={PostStack}
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
        component={HelpAndSupport}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="md-help-circle-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Feedback"
        component={Feedback}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="feedback" size={20} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;

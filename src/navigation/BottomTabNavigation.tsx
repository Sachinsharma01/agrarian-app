import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import Home from '../screens/home';
import Settings from '../screens/settings';
import AgriStore from '../screens/agristore';
import config from '../config';
import KisanVedika from '../screens/kisanVedika';
import PostStack from './PostStack';
import Post from '../screens/post';
// import PostStack from './PostStack';
// import Post from '../components/post/index';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: config.constants.primaryColor},
        tabBarActiveTintColor: 'yellow',
        tabBarInactiveTintColor: '#fff',
        tabBarShowLabel: true,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Home2"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-home-outline" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Agri Store',
          tabBarIcon: ({color, size}) => (
            <FeatherIcons name="shopping-bag" size={22} color={color} />
          ),
        }}
        name="AgriStore"
        component={AgriStore}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Kisan Vedika',
          title: 'Kisan Vedika',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="people-outline" color={color} size={30} />
          ),
        }}
        name="KisanVedika"
        component={PostStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-settings-outline" color={color} size={30} />
          ),
        }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

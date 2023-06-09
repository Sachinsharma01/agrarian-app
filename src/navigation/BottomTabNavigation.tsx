import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {useTranslation} from 'react-i18next';
import Home from '../screens/home';
import Settings from '../screens/settings';
import AgriStore from '../screens/agristore';
import config from '../config';
import PostStack from './PostStack';
import Forecast from '../screens/weather';
import Crop from '../screens/crop/index';
import OngoingCrop from '../screens/crop/OngoingCrop';
import SoilHealth from '../screens/soil';
import Cart from '../screens/cart';
import Notification from '../screens/notification';
import Ticket from '../screens/help/Ticket';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  const {t, i18n} = useTranslation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={t('Home')}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Weather"
        component={Forecast}
        options={{headerTransparent: true, headerTintColor: '#fff'}}
      />
      <Stack.Screen name="SoilHealth" component={SoilHealth} />
      <Stack.Screen name="Crop" component={Crop} />
      <Stack.Screen name="OngoingCrop" component={OngoingCrop} />
      <Stack.Screen
        name="Notifications"
        component={Notification}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Ticket"
        component={Ticket}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};
const BottomTabNavigation = () => {
  const {t, i18n} = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: config.constants.primaryColor, height: 50},
        tabBarActiveTintColor: 'yellow',
        tabBarInactiveTintColor: '#fff',
        tabBarShowLabel: true,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name={t('Home2')}
        component={HomeStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-home-outline" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          headerShadowVisible: true,
          headerStyle: {
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.17,
            shadowRadius: 3.05,
            elevation: 4,
          },
          tabBarIcon: ({color, size}) => (
            <FeatherIcons name="shopping-bag" size={22} color={color} />
          ),
        }}
        name={t('Agristore')}
        component={AgriStore}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="people-outline" color={color} size={30} />
          ),
        }}
        name={t('Kisan Vedika')}
        component={PostStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-settings-outline" color={color} size={30} />
          ),
        }}
        name={t('Settings')}
        component={Settings}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

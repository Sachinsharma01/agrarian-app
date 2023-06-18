import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTranslation} from 'react-i18next';
import CustomDrawer from '../components/drawer';
import BottomTabNavigation from './BottomTabNavigation';
import Profile from '../screens/profile';
import AgriStore from '../screens/agristore';
import Settings from '../screens/settings';
import config from '../config';
import PostStack from './PostStack';
import Feedback from '../screens/feedback';
import HelpAndSupport from '../screens/help';
import Contact from '../screens/contact';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  const {t, i18n} = useTranslation();

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
        name={t('Home3')}
        component={BottomTabNavigation}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={t('Profile')}
        component={Profile}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={t('Agristore')}
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
        name={t('Kisan Vedika')}
        component={PostStack}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="people-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={t('Settings')}
        component={Settings}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={t('Help')}
        component={HelpAndSupport}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="md-help-circle-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={t('Feedback')}
        component={Feedback}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="feedback" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={t('Contact')}
        component={Contact}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="contact" size={20} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;

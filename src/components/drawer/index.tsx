import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useDispatch, useSelector} from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useTranslation} from 'react-i18next';
import {menu, user} from '../../assets';
import config from '../../config';
import {signOut} from '../../utils/logout';
import UserAvatar from '../user/UserAvatar';
import onShare from '../../utils/share';

const CustomDrawer = (props: any) => {
  const {t, i18n} = useTranslation();
  const dispatch = useDispatch();
  const farmer = useSelector((state: any) => state.metaDataReducer);
  const logoutHandler = () => {
    signOut(dispatch);
  };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: config.constants.primaryColor,
        }}>
        <ImageBackground source={menu.image} style={{padding: 20}}>
          <UserAvatar
            height={80}
            width={80}
            border={40}
            default={user.image}
            image={farmer?.user?.image || null}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
            {farmer?.user?.name || 'Farmer'}
          </Text>
          {farmer?.user?.isPaid && (
            <Text
              style={{
                color: config.constants.secondaryColor,
                paddingRight: 10,
              }}>
              {' '}
              Premium
            </Text>
          )}
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={onShare} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="share-social-outline" size={22} color="#000" />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
                color: '#000',
              }}>
              {t('Refer')}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={logoutHandler} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} color="#000" />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
                color: '#000',
              }}>
              {t('Sign Out')}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {signOut} from '../../utils/logout';
import config from '../../config';
import onShare from '../../utils/share';

const Settings = ({navigation}: any) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    signOut(dispatch);
  };
  return (
    <SafeAreaView>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-outline"
            size={30}
            color="#fff"
            style={{marginHorizontal: 10}}
          />
        </TouchableOpacity>
        <View style={{marginLeft: 10}}>
          <Text style={{textAlign: 'center', color: '#fff', fontSize: 22}}>
            Settings
          </Text>
        </View>
      </View>
      <View style={styles.wrapper}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={styles.signout}>
          <Text style={{fontWeight: 'bold', color: '#000'}}>Edit Profile</Text>
          <MaterialIcons name="edit" size={22} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.wrapper}>
        <TouchableOpacity
          onPress={() => Linking.openURL(config.websiteURL)}
          style={styles.signout}>
          <Text style={{fontWeight: 'bold', color: '#000'}}>About</Text>
          <Ionicons name="arrow-forward-outline" size={22} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={onShare} style={styles.signout}>
          <Text style={{fontWeight: 'bold', color: '#000'}}>Share</Text>
          <Ionicons name="ios-share-social" size={22} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={logoutHandler} style={styles.signout}>
          <Text style={{fontWeight: 'bold', color: '#000'}}>Sign Out</Text>
          <Ionicons name="log-in" size={22} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <Text style={{textAlign: 'center', marginTop: 10, color: '#000'}}>
          Agrarian v1.0.0
        </Text>
        <Text style={{textAlign: 'center', marginTop: 10, color: '#000'}}>
          Copyright ©2023 All Rights Reserved by Agrarian
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: config.constants.borderColor,
    borderBottomWidth: 2,
    marginTop: 10,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: config.constants.borderColor,
    borderBottomWidth: 0.5,
    marginTop: 10,
    width: '100%',
  },
  signout: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '20%',
    backgroundColor: config.constants.primaryColor,
    color: '#fff',
  },
});

export default Settings;

import {
  Linking,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons';
import config from '../../config';

const Contact = ({navigation}: any) => {
  const {t} = useTranslation();
  return (
    <>
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
              {t('Back')}
            </Text>
          </View>
        </View>

        <Text
          style={{marginHorizontal: '5%', marginVertical: '5%', color: '#000'}}>
          {t('Join our farmer community on WhatsApp')}:
        </Text>
        <TouchableOpacity>
          <Text
            onPress={() => Linking.openURL(config.whatsappURL)}
            style={{
              marginHorizontal: '5%',
              marginVertical: '5%',
              padding: 10,
              color: '#fff',
              backgroundColor: config.constants.primaryColor,
              textAlign: 'center',
              borderRadius: 10,
            }}>
            {t('Join')}
          </Text>
        </TouchableOpacity>
        <Text
          style={{marginHorizontal: '5%', marginVertical: '5%', color: '#000'}}>
          {t('Email')}: {config.email}
        </Text>
        <Text
          style={{marginHorizontal: '5%', marginVertical: '5%', color: '#000'}}>
          {t('Phone')}: {config.helplineNumber}
        </Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 70,
    backgroundColor: config.constants.primaryColor,
    color: '#fff',
  },
});
export default Contact;

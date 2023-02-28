import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import config from '../../config';
import {logo} from '../../assets';
import {useTranslation} from 'react-i18next';

const Welcome = ({navigation}: any) => {
  const {t, i18n} = useTranslation();

  const [currentLanguage, setLanguage] = useState('en');
  const changeLanguageHandler = async (value:string) => {
    setLanguage(value);
    await i18n.changeLanguage(value)
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageView}>
        <Image source={logo.image} style={styles.image} />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => changeLanguageHandler('en')}>
        <Text style={styles.buttonText}>English</Text>
        <Ionicons name="arrow-forward-outline" color="#fff" size={22} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => changeLanguageHandler('hi')}>
        <Text style={styles.buttonText}>{t('Hindi')}</Text>
        <Ionicons name="arrow-forward-outline" color="#fff" size={22} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#20315f',
    textTransform: 'uppercase',
    marginTop: 30,
  },
  image: {
    width: 200,
    height: 200,
  },
  imageView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'normal',
    fontSize: 20,
  },
  button: {
    backgroundColor: config.constants.primaryColor,
    padding: 20,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
    borderRadius: 10,
  },
});

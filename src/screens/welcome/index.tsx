import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import config from '../../config';
import {welcomeLogo} from '../../assets';
import First from '../../components/onboarding/First';
import Second from '../../components/onboarding/Second';
import Third from '../../components/onboarding/Third';
import Fourth from '../../components/onboarding/Fouth';
import Fifth from '../../components/onboarding/Fifth';
import {updateLanguage} from '../../redux/actions/languageActions';

const Welcome = ({navigation}: any) => {
  const [screen, setScreen] = useState(1);
  const {t, i18n} = useTranslation();
  const [currentLanguage, setLanguage] = useState('en');
  const dispatch = useDispatch();

  const changeLanguageHandler = async (value: string) => {
    setLanguage(value);
    await i18n.changeLanguage(value);
    await AsyncStorage.setItem('language', value);
    dispatch(updateLanguage(value));
    setScreen(2);
  };
  return (
    <>
      {screen === 1 && (
        <SafeAreaView style={styles.container}>
          <View style={styles.imageView}>
            <Image source={welcomeLogo.image} style={styles.image} />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => changeLanguageHandler('hi')}>
            <Text style={styles.buttonText}>हिंदी</Text>
            <Ionicons name="arrow-forward-outline" color="#fff" size={22} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => changeLanguageHandler('en')}>
            <Text style={styles.buttonText}>English</Text>
            <Ionicons name="arrow-forward-outline" color="#fff" size={22} />
          </TouchableOpacity>
        </SafeAreaView>
      )}
      {screen === 2 && <First onPress={() => setScreen(3)} />}
      {screen === 3 && <Second onPress={() => setScreen(4)} />}
      {screen === 4 && <Third onPress={() => setScreen(5)} />}
      {screen === 5 && <Fourth onPress={() => setScreen(6)} />}
      {screen === 6 && <Fifth onPress={() => navigation.navigate('Login')} />}
    </>
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

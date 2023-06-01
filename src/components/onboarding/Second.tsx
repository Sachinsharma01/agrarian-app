import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';

import config from '../../config';

const Second = ({onPress}: any) => {
    const {t, i18n} = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/screens/marketing.jpg')}
        style={{height: '100%', width: '100%'}}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{t('Next')}</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

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
    color: config.constants.primaryColor,
    fontWeight: 'normal',
    fontSize: 17,
  },
  button: {
    padding: 4,
    paddingHorizontal: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 30,
    position: 'absolute',
    // bottom: 120,
    right: 10,
    borderColor: config.constants.primaryColor,
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default Second;

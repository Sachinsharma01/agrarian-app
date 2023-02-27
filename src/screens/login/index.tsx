import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import CountryFlag from 'react-native-country-flag';
import config from '../../config';
import LoginSvg from '../../assets/screens/login.svg';
import {getOTP} from '../../request';
import {updateNumber} from '../../redux/actions/phoneNumberActions';
import { useTranslation } from 'react-i18next';

const Login = ({navigation}: any) => {
  const {t, i18n} = useTranslation();
  const [phone, setPhone]: any = useState('');
  const [showLoader, setShowLoader] = useState(false)
  const dispatch = useDispatch();

  const loginHandler = async () => {
    setPhone('');
    setShowLoader(true);
    const response: any = await getOTP(phone as string);
    console.log('OTP send to mobile number', response);
    setShowLoader(false);
    if (response.error) {
      Alert.alert(config.defaultErrorMessage);
    } else {
      console.log(`before +91${phone}`, )
      dispatch(updateNumber(`+91${phone}`));
      navigation.navigate('OTP');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {showLoader && <ActivityIndicator size='large' color={config.constants.primaryColor} />}
      <View style={styles.imageView}>
        <LoginSvg height={300} width={300} />
      </View>
      <View style={styles.input}>
        <Feather
          name="smartphone"
          size={20}
          color="#C6C6C6"
          style={{marginRight: 5}}
        />
        <CountryFlag isoCode="in" size={15} style={{marginRight: 5}} />
        <TextInput
          placeholder="Enter Phone Number"
          placeholderTextColor="#000"
          style={{color: 'black'}}
          keyboardType="numeric"
          value={phone}
          maxLength={10}
          onChangeText={e => setPhone(e)}
        />
      </View>
      <View style={{width: '90%', marginTop: 30}}>
        <TouchableOpacity
          onPress={loginHandler}
          style={{
            backgroundColor: config.constants.primaryColor,
            padding: 20,
            borderRadius: 10,
            marginBottom: 30,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '700',
              fontSize: 16,
              color: '#fff',
            }}>
            {t('Login')}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    width: '90%',
    paddingHorizontal: 10,
    borderColor: config.constants.borderColor,
  },
  imageView: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 300,
    width: 300,
  },
});

export default Login;

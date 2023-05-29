import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import config from '../../config';
import OTPSvg from '../../assets/screens/otp.svg';
import {verifyOTP, getMetaData} from '../../request/index';
import {IVerifyotp} from '../../interfaces/IVerifyotp';
import {updateToken} from '../../redux/actions/tokenActions';
import {updateUser} from '../../redux/actions/metaDetaActions';

const OTP = ({navigation}: any) => {
  const {t, i18n} = useTranslation();

  const [otp, setOtp]: any = useState('');
  const dispatch = useDispatch();
  const {phone} = useSelector((state: any) => state.phoneNumberReducer);
  const {token} = useSelector((state: any) => state.tokenReducer);
  // console.log('phoneeeeeeeeeeeee', phone);
  
  const clickHandler = async () => {
    setOtp('');
    const response = await verifyOTP({
      otp: otp,
      phone: phone,
    } as IVerifyotp);
    if (response.error) {
      Alert.alert(config.defaultErrorMessage);
    } else {
      dispatch(updateToken(response?.data?.token));
      const userData = await getMetaData(token);
      dispatch(updateUser(userData?.data));
      // console.log('User details from get meta data$$$', userData);

      ToastAndroid.show('Welcome', 1);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageView}>
        <OTPSvg height={300} width={300} />
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder="******"
          style={styles.otpInput}
          keyboardType="numeric"
          placeholderTextColor="#000"
          value={otp}
          maxLength={6}
          onChangeText={e => setOtp(e)}
        />
      </View>
      <Text style={{marginTop: 10, color: '#000'}}>
        {t('An OTP is sent to')} {phone}
      </Text>
      <View style={{width: '50%', marginTop: 30}}>
        <TouchableOpacity
          onPress={clickHandler}
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
            {t('Validate')}
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
    width: '70%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderColor: config.constants.borderColor,
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpInput: {
    color: 'black',
    textAlign: 'center',
    letterSpacing: 20,
    width: '100%',
  },
});

export default OTP;

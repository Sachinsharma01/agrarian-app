import {Alert} from 'react-native';
import config from '../config';
import {IVerifyotp} from '../interfaces/IVerifyotp';
import axiosInstance from './axios';

export const getOTP = async (phone: string) => {
  try {
    console.log('+91'.concat(phone));
    const res = await axiosInstance.post('/auth/generate-otp', {
      phone: String('+91'.concat(phone)),
    });
    const data = await res?.data;
    console.log('data $$$$$$$$$', data);
    return data;
  } catch (err) {
    Alert.alert(config.defaultErrorMessage);
  }
};

export const verifyOTP = async (input: IVerifyotp) => {
  try {
    const res = await axiosInstance.post('/auth/verify-otp', {
      phone: input.phone,
      otp: input.otp,
    });
    const data = await res?.data;
    console.log('data $$$$$$$$$', data);
    return data;
  } catch (err) {
    Alert.alert(config.defaultErrorMessage);
  }
};
export const getMetaData = async (token: string) => {
  try {
    const res = await axiosInstance.post(
      '/customer/get-meta-data',
      {
        token: token,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await res?.data;
    console.log('data $$$$$$$$$', data);
    return data;
  } catch (err) {
    // Alert.alert(config.defaultErrorMessage);
  }
};

export const updateUserDetails = async (input: any, token: string) => {
  try {
    const res = await axiosInstance.post(
      '/customer/edit-details',
      {
        ...input,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await res?.data;
    console.log('data $$$$$$$$$', data);
    return data;
  } catch (err) {
    Alert.alert(config.defaultErrorMessage);
  }
};

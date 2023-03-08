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

export const getAllPosts = async (token: string) => {
  try {
    const res = await axiosInstance.get('/post/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.data;
    console.log('hgvfbdjvgchbjfg hbvercwjfghbjrv', data);
    return data.data;
  } catch (err) {
    Alert.alert(config.defaultErrorMessage);
  }
};
export const getPostDetails = async (token: string, postId: string) => {
  try {
    const res = await axiosInstance.get(`/post/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.data;
    console.log('hgvfbdjvgchbjfg hbvercwjfghbjrv', data);
    return data.data;
  } catch (err) {
    Alert.alert(config.defaultErrorMessage);
  }
};

export const addComment = async (token: string, input: any) => {
  try {
    console.log('55555555555555555555555555555555555555', input, token);
    const res = await axiosInstance.post(
      '/post/addComment',
      {
        postId: input.postId,
        comment: input.comment,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await res.data;
    console.log('hgvfbdjvgchbjfg hbvercwjfghbjrv', data);
    return data.data;
  } catch (err) {
    Alert.alert(config.defaultErrorMessage);
  }
};

export const getAllCrops = async (token: string) => {
  try {
    const res = await axiosInstance.get('/crops/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.data;
    console.log('$$$$$$$$$$$$ all crops', data);
    return data.data;
  } catch (err) {
    Alert.alert(config.defaultErrorMessage);
  }
};

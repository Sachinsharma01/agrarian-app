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
    return data.data;
  } catch (err) {
    Alert.alert(config.defaultErrorMessage);
  }
};

export const addComment = async (token: string, input: any) => {
  try {
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
    return data.data;
  } catch (err) {
    Alert.alert(config.defaultErrorMessage);
  }
};

export const addPost = async (token: string, payload: any) => {
  try {
    const res = await axiosInstance.post(
      '/post/addPost',
      {
        description: payload.description,
        crop: {
          cropName: payload.crop.cropName,
          cropImage: payload.crop.cropImage,
          cropId: payload.crop.cropId,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await res.data;
    return data.data;
  } catch (err) {
    Alert.alert(config.defaultErrorMessage);
  }
};

export const getWeather = async (location: any, token: string) => {
  try {
    console.log('locccccccccccccccccccccccccccccccccccccc', location);
    const res = await axiosInstance.get('/home/weather', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        lat: location?.coords?.latitude || 28.7041,
        long: location?.coords?.longitude || 77.1025,
      },
    });
    const data = await res.data;
    console.log('$$$$$$$$$$$$ all weather', data);
    return data.data;
  } catch (err) {
    Alert.alert(config.defaultErrorMessage + ' Weather');
  }
};
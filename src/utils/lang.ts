import AsyncStorage from '@react-native-async-storage/async-storage';

export const getLang = async () => {
  const lang = await AsyncStorage.getItem('language');
  return lang;
};

export const setLang = async (lang: string) => {
  AsyncStorage.setItem('language', lang);
};

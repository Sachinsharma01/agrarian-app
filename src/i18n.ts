import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './assets/i18n/en.json';
import hi from './assets/i18n/hi.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'hi',
  fallbackLng: 'hi',
  resources: {
    en: en,
    hi: hi,
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;

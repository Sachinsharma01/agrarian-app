import config from '../../config';

export const updateLanguage = (language: any) => {
  return {
    language: language,
    type: config.actionTypes.UPDATE_LANGUAGE,
  };
};

export const setLanguage = () => {
  return {
    crops: {},
    type: config.actionTypes.SET_LANGUAGE,
  };
};

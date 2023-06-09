import config from '../../config';

const initialState: any = {};

export const languageReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case config.actionTypes.UPDATE_LANGUAGE:
      return {
        ...state,
        language: action.language,
      };
    case config.actionTypes.SET_LANGUAGE:
      return {
        language: {},
      };
    default:
      return state;
  }
};

import config from '../../config';

const initialState: any = {
 
};

export const locationReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case config.actionTypes.SET_LOCATION:
      return {
        ...state,
        weather: action.weather,
      };
    case config.actionTypes.REMOVE_LOCATION:
      return {
        weather: {},
      };
    default:
      return state;
  }
};

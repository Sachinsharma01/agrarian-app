import config from '../../config';

const initialState = {
  phone: '',
};

const phoneNumberReducer: any = (state = initialState, action: any) => {
  switch (action.type) {
    case config.actionTypes.UPDATE_PHONE_NUMBER:
      return {
        ...state,
        phone: action.phone,
      };
    case config.actionTypes.REMOVE_PHONE_NUMER:
      return {
        phone: '',
      };
    default:
      return state;
  }
};

export default phoneNumberReducer;

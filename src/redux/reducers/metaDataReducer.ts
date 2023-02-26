import config from '../../config';

const initialState: any = {
  user: null
};

const metaDataReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case config.actionTypes.GET_USER:
      return {
        ...state,
        user: action.user,
      };
    case config.actionTypes.REMOVE_USER:
      return {
        user: null,
      };
    default:
      return state;
  }
};

export default metaDataReducer;

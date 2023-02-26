import config from '../../config';

const initialState = {
  token: null,
  isLoggedIn: false,
};

const tokenReducer: any = (state: any = initialState, action: any) => {
  switch (action.type) {
    case config.actionTypes.UPDATE_TOKEN:
      console.log(action.token + ' IN REDUX');
      return {
        ...state,
        token: action.token,
        isLoggedIn: true,
      };
    case config.actionTypes.REMOVE_TOKEN:
      return {
        ...state,
        token: null,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};

export default tokenReducer;

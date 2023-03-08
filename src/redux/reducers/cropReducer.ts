import config from '../../config';

const initialState = {
  crops: null,
};

const cropReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case config.actionTypes.UPDATE_CROPS:
      return {
        ...state,
        crops: action.crops,
      };
    case config.actionTypes.REMOVE_CROPS:
      return {
        crops: null,
      };
    default:
      return state;
  }
};


export default cropReducer
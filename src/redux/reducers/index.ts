import {combineReducers} from 'redux';
import tokenReducer from './tokenReducers';
import phoneNumberReducer from './phoneNumberReducer';
import metaDataReducer from './metaDataReducer';
import cropReducer from './cropReducer';

const rootReducer = combineReducers({
  tokenReducer,
  phoneNumberReducer,
  metaDataReducer,
  cropReducer
});

export default rootReducer;

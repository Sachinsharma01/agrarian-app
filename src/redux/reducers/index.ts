import {combineReducers} from 'redux';
import tokenReducer from './tokenReducers';
import phoneNumberReducer from './phoneNumberReducer';
import metaDataReducer from './metaDataReducer';

const rootReducer = combineReducers({
  tokenReducer,
  phoneNumberReducer,
  metaDataReducer,
});

export default rootReducer;

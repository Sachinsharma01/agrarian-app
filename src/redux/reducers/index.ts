import {combineReducers} from 'redux';
import tokenReducer from './tokenReducers';
import phoneNumberReducer from './phoneNumberReducer';
import metaDataReducer from './metaDataReducer';
import cropReducer from './cropReducer';
import { locationReducer } from './locationReducer';

const rootReducer = combineReducers({
  tokenReducer,
  phoneNumberReducer,
  metaDataReducer,
  cropReducer,
  locationReducer
});

export default rootReducer;

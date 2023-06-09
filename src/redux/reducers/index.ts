import {combineReducers} from 'redux';
import tokenReducer from './tokenReducers';
import phoneNumberReducer from './phoneNumberReducer';
import metaDataReducer from './metaDataReducer';
import cropReducer from './cropReducer';
import {locationReducer} from './locationReducer';
import {languageReducer} from './languageReducer';

const rootReducer = combineReducers({
  tokenReducer,
  phoneNumberReducer,
  metaDataReducer,
  cropReducer,
  locationReducer,
  languageReducer,
});

export default rootReducer;

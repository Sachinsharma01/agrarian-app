import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import {persistReducer, persistStore} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import config from '../../config';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const pReducer = persistReducer(persistConfig, rootReducer);
let store: any;
if (config.development === 'dev') {
  store = createStore(
    pReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk)),
  );
} else {
  /* eslint-disable no-underscore-dangle */
  store = createStore(
    pReducer,
  );
}
const persistor = persistStore(store);

export {store, persistor};

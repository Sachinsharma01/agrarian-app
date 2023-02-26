import AsyncStorage from "@react-native-async-storage/async-storage";
import {createStore} from "redux";
import rootReducer from "../reducers";
import {persistReducer, persistStore} from 'redux-persist'


const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer);
const persistor = persistStore(store)

export  { store , persistor};
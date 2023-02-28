/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavContainer from './src/navigation';
import './src/i18n';
import {I18nextProvider, useTranslation} from 'react-i18next';
import i18next from 'i18next';

// clickHandler();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <I18nextProvider i18n={i18next}>
          <AppNavContainer />
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;

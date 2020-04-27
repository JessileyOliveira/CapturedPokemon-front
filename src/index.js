import React from 'react';
import {StatusBar} from 'react-native';
import App from './config/VerifyLoged';
import {Provider} from 'react-redux';
import {store, persistor} from './store';
import {PersistGate} from 'redux-persist/integration/react';

const index = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
        <App />
      </PersistGate>
    </Provider>
  );
};

export default index;

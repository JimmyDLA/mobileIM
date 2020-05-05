import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { GoogleSignin } from '@react-native-community/google-signin';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { configureStore } from 'App/Redux/createStore';
import RootScreen from './Containers/Root/RootScreen'

const store = configureStore();
const persistor = persistStore(store);
GoogleSignin.configure({
  iosClientId: '653599359670-8p464sin6s79mcc7ou5csfjqj0muf1in.apps.googleusercontent.com'
});


export default class App extends Component {
  render() {
    return (
      /**
       * @see https://github.com/reduxjs/react-redux/blob/master/docs/api/Provider.md
       */
      <Provider store={store}>
        {/**
         * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
         * and saved to redux.
         * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
         * for example `loading={<SplashScreen />}`.
         * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
         */}
        <PersistGate loading={null} persistor={persistor}>
          <RootScreen />
        </PersistGate>
      </Provider>
    )
  }
}

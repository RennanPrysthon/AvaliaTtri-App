import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, View, Text} from "react-native";

import { store, persistor } from './store/index';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';

import './config/ReactotronConfig';

import Router from './routes';
import FlashMessage from 'react-native-flash-message';

export default function App () {

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor="#000"/>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
      <FlashMessage position="top" />
    </>
  );
}

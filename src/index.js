import React from 'react';
import { StatusBar } from "react-native";

import store from './store/index';
import { Provider } from "react-redux";

import Routes from './routes/index';

export default function App () {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor="#000"/>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}

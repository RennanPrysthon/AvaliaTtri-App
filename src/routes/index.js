import React from 'react';
import { useSelector } from 'react-redux';

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Logged from './logged';
import Logout from './logout';

export const createRootNavigator = (signedIn = false) => {
  return createStackNavigator({
    Logged: { screen: Logged },
    Logout: { screen: Logout, title: "Inicio" }
  },
  {
    headerMode: "none",
    mode: "modal",
    initialRouteName: signedIn ? "Logged" : "Logout",
    navigationOptions: {
      gesturesEnabled: false
    }
  });
};

export default function Routes() {
  const auth = useSelector(state => state.auth);
  
  const Layout = createAppContainer(createRootNavigator(auth.isLogged));

  return <Layout />;
}
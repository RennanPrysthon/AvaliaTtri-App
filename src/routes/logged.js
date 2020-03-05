import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../pages/Main/index';
import Resultado from '../pages/Resultado/index';
import DetalheProva from '../pages/DetalheProva/index';

const MainStack = createStackNavigator({
  ListarProvas: {
    screen: Main,
    navigationOptions: {
      title: "Lista",
    },
  },
  Resultado: {
    screen: Resultado,
    navigationOptions: {
      title: "Resultado da prova",
    },
  },
  DetalheProva: {
    screen: DetalheProva,
    navigationOptions: {
      title: "Fazer prova",
    },
  }
});

const Logged = createAppContainer(createBottomTabNavigator({
  Main: {
    screen: MainStack,
    navigationOptions: {
      title: "Inicio",
      tabBarIcon: ({focused , horizontal, tintColor}) => {        
        return <Icon name='ios-list-box' size={focused ? 25 : 20} color={tintColor}/>
      }
    }
  }
}));

export default Logged;
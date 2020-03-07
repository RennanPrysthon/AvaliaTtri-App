import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../pages/Main/index';
import DetalheProva from '../pages/DetalheProva/index';
import Resultado from '../pages/Resultado/index';

const Stack = createStackNavigator();

const Logged = () => (
  <Stack.Navigator>
    <Stack.Screen name="Lista" component={Main}/>
    <Stack.Screen name="DetalheProva" component={DetalheProva}/>
    <Stack.Screen name="Resultado" component={Resultado} />
  </Stack.Navigator>
);

const Router = () => (
  <NavigationContainer>
    <Logged />
  </NavigationContainer>
);

export default Router;
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Main from '../pages/Main/index';
import DetalheProva from '../pages/DetalheProva/index';
import Resultado from '../pages/Resultado/index';
import FazerProva from '../pages/FazerProva/index';
import SideBar from '../components/SideBar/index';
import Login from '../pages/Login/index';
import Header from '../components/Header/index';
import HeaderBack from '../components/HeaderBack/index';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const MainScreen = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      options={{
        header: () => <Header navigation={navigation} />,
      }}
      component={Main}
    />
    <Stack.Screen
      name="FazerProva"
      component={FazerProva}
      options={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#456',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
    <Stack.Screen
      name="DetalheProva"
      component={DetalheProva}
      options={{
        headerStyle: {
          backgroundColor: '#456',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
    <Stack.Screen
      name="Resultado"
      component={Resultado}
      options={{
        headerStyle: {
          backgroundColor: '#456',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  </Stack.Navigator>
);

const StackMain = () => (
  <Drawer.Navigator
    drawerContent={({state, navigation, descriptors}) => (
      <SideBar
        state={state}
        navigation={navigation}
        descriptors={descriptors}
      />
    )}>
    <Drawer.Screen name="Home" component={MainScreen} />
    <Drawer.Screen name="Login" component={Login} />
  </Drawer.Navigator>
);

const Logged = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      options={{
        headerShown: false,
      }}
      component={StackMain}
    />
  </Stack.Navigator>
);

const Router = () => (
  <NavigationContainer>
    <Logged />
  </NavigationContainer>
);

export default Router;

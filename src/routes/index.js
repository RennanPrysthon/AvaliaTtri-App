import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Main from '../pages/Main/index';
import Resultado from '../pages/Resultado/index';
import FazerProva from '../pages/FazerProva/index';
import SideBar from '../components/SideBar/index';
import Login from '../pages/Login/index';
import Header from '../components/Header/index';
import { useSelector } from 'react-redux';
import Perfil from '../pages/Perfil/index';

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

const PerfilScreen = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Perfil"
      options={{
        header: () => <Header navigation={navigation} />,
      }}
      component={Perfil}
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
    <Drawer.Screen name="Perfil" component={PerfilScreen} />
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

const Loggout = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Login"
      options={{
        headerShown: false
      }}
      component={Login}
    />
  </Stack.Navigator>
);

const Router = () => {
  const auth = useSelector(state => state.auth);
  
  React.useEffect(() => {

  }, [auth]) 

  return (
    <NavigationContainer>
      {auth.isLogged ? <Logged /> : <Loggout />}
    </NavigationContainer>
  )
};

export default Router;

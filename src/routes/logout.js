import Login from '../pages/Login/index';

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const Logout = createAppContainer(createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    }
  }
}));

export default Logout;
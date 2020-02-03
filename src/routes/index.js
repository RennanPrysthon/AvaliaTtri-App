import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Main from '../pages/Main/index';
import Login from '../pages/Login/index';

const Logged = createStackNavigator({
  Main: {
    screen: Main,
  },
});

const Logout = createStackNavigator({
  Login: {
    screen: Login,
  },
});

const Routes = (logged = false) => {
  if(logged) {
    return createAppContainer(Logged);
  } else {
    return createAppContainer(Logout);
  }
}

export default Routes;
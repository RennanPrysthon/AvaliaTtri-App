import Main from '../pages/Main/index';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const Logged = createAppContainer(createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      headerShown: false,
    }
  },
}));

export default Logged;
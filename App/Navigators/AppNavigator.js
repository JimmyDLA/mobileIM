import { createAppContainer, createStackNavigator } from 'react-navigation';

import WelcomeScreen from 'App/Screens/Welcome/WelcomeScreenContainer';
import LoginScreen from 'App/Screens/Login/LoginScreenContainer';
import ChatScreen from 'App/Screens/Chat/ChatScreenContainer';
import { Colors } from '../Theme';

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    MainScreen: {
      screen: WelcomeScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: Colors.darkGray,
          borderColor: Colors.darkGray,
          borderBottomWidth: 0,
        },
      },
    },
    ChatScreen: {
      screen: ChatScreen,
      navigationOptions: {
        title: 'Chat',
        headerStyle: {
          backgroundColor: Colors.darkGray,
          borderColor: Colors.lightGray,
          borderBottomWidth: 0,
        },
        headerTintColor: '#fff',
      },
    },
  },
  {
    // By default the application will show the splash screen
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    mode: 'card',
    headerMode: 'screen',
  }
);

const RootNavigator = createStackNavigator(
  {
    MainScreen: StackNavigator,
    Modal: LoginScreen,
  },
  {
    mode: 'modal',
    headerMode: 'none',
    transparentCard: false,
  }
);

export default createAppContainer(RootNavigator);

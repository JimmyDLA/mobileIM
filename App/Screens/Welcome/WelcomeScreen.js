import React from 'react';
import { Button } from '../../Components/molecules/Button';
import { Text, View } from 'react-native';
import { style } from './WelcomeScreen.style';

export class WelcomeScreen extends React.Component {

handleGoogleLogin = () => {
  // 1. Navigate to LoginScreen
  const { googleLogin } = this.props;
  googleLogin();
  // 2. Google OAuth
}

handleNewAccount = () => {
  // 1. Fetch fake user info
  // 2. Navigate to ChatScreen
  const { goToChat } = this.props;
  goToChat();
}
  render() {
    return (
      <View style={style.container}>
        <Text>
          WelcomeScreen
        </Text>
        <Button
          label="Google Sign up"
          onPress={this.handleGoogleLogin}
        />
        <Button 
          label="New Account"
          onPress={this.handleNewAccount}
          secondary
        />
      </View>
    )
  }
}

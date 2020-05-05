import React from 'react';
import { Button } from '../../Components/molecules/Button';
import { View } from 'react-native';
import { style } from './WelcomeScreen.style';

export class WelcomeScreen extends React.Component {

handleGoogleLogin = () => {
  const { googleLogin } = this.props;
  googleLogin();
}

handleNewAccount = () => {
  const { newAccount } = this.props;
  newAccount();
}
  render() {
    return (
      <View style={style.container}>
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

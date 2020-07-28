import React from 'react';
import { Button } from '../../Components/molecules/Button';
import { View, Image } from 'react-native';
import { style } from './WelcomeScreen.style';
import logo from '../../Assets/Images/mobileIM_logo.png';

export class WelcomeScreen extends React.Component {
  handleGoogleLogin = () => {
    const { googleLogin } = this.props;
    googleLogin();
  };

  handleNewAccount = () => {
    const { newAccount } = this.props;
    newAccount();
  };
  render() {
    return (
      <View style={style.container}>
        <View>
          <Image resizeMode="contain" source={logo} style={style.logo} />
        </View>
        <View>
          <Button label="Google Sign up" onPress={this.handleGoogleLogin} />
          <Button label="New Account" onPress={this.handleNewAccount} secondary />
        </View>
      </View>
    );
  }
}

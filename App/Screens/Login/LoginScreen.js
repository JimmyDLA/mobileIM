import React from 'react';
import { Button } from '../../Components/molecules/Button';
import { Text, View } from 'react-native';
import { style } from './LoginScreen.style';

export class LoginScreen extends React.Component {

  handleOnBack = () => {
    const { goBack } = this.props;
    goBack();
  }

  render() {
    return (
      <View style={style.container}>
        <Text>
          LoginScreen
        </Text>
        <Button 
          label="Back"
          secondary
          onPress={this.handleOnBack}
        />
      </View>
    )
  }
}

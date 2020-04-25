import React from 'react';
import { Platform, Text, View, ActivityIndicator, Image } from 'react-native';
import { Button } from '../../Components/molecules/Button';
import { style } from './ChatScreen.style';

export class ChatScreen extends React.Component {

  handleGoBack = () => {
    const { goBack } = this.props;
    goBack();
  }

  render() {
    return (
      <View style={style.container}>
        <Text>
          ChatScreen
        </Text>
        <Button 
          label="goBack"
          onPress={this.handleGoBack}
        />
      </View>
    )
  }
}

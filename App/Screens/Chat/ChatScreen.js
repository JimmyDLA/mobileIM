import React from 'react';
import shortid from 'shortid';
import { ScrollView, Text, View, ActivityIndicator, Image } from 'react-native';
import { Button } from '../../Components/molecules/Button';
import { TextInput } from '../../Components/organisms/TextInput';
import { Message } from '../../Components/organisms/Message';
import { style } from './ChatScreen.style';

export class ChatScreen extends React.Component {

  componentDidMount = () => {
    const { sendMessage, user: { email, name, pic } } = this.props;
    sendMessage({ 'message': 'today is 4.28.19', email, name, pic })
  }

  handleGoBack = () => {
    const { goBack } = this.props;
    goBack();
  }

  render() {
    const { user: { email }, messageLog } = this.props;
    return (
      <View style={style.container}>
        <ScrollView contentContainerStyle={style.board}>
          {messageLog.map(message => (
            <Message 
              key={shortid.generate()}
              myEmail={email}
              data={message}
            />
          ))}
        </ScrollView>
        <TextInput
          placeholder="Message..."
        />
      </View>
    )
  }
}

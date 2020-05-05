import React from 'react';
import shortid from 'shortid';
import { ScrollView, View, KeyboardAvoidingView } from 'react-native';
import { Field } from 'redux-form';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TextInput } from '../../Components/organisms/TextInput';
import { Message } from '../../Components/organisms/Message';
import { style } from './ChatScreen.style';

export class ChatScreen extends React.Component {

  handleGoBack = () => {
    const { goBack } = this.props;
    goBack();
  }

  handleSend = () => {
    const { 
      sendMessage, 
      message,
      user: {
        email,
        name,
        pic,
      },
    } = this.props;

    if (message.length) {
      sendMessage({
        message,
        email,
        name,
        pic,
      });
    }
  }

  render() {
    const { user: { email }, messageLog } = this.props;

    if (messageLog.length) {
      setTimeout(() => {
        this.scrollView.scrollToEnd({ animated: true });
      }, 250);
    }

    return (
      <KeyboardAvoidingView behavior="padding" enabled keyboardVerticalOffset={hp(10)}>
        <View style={style.container}>
          <ScrollView 
            ref={ref => this.scrollView = ref}
            keyboardDismissMode="interactive"
            contentContainerStyle={style.board}
          >
            {messageLog.map(message => (
              <Message 
                key={shortid.generate()}
                myEmail={email}
                data={message}
              />
            ))}
          </ScrollView>
          <Field 
            component={TextInput}
            name="message"
            returnKeyType="send"
            placeholder="Message..."
            onSend={this.handleSend} 
          />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

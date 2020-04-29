import React from 'react';
import {
  Text,
  View, 
  TextInput as Input,
  TouchableOpacity,
} from 'react-native';
import { style } from './TextInput.style';

export class TextInput extends React.PureComponent {
  render() {
    const { styles, placeholder } = this.props;
    return (
      <View style={style.container}>
        <Input
          style={[style.input, styles]}
          placeholder={placeholder || "..."}
          autoCorrect
        />
        <TouchableOpacity style={style.sendButton}>
          <Text style={style.sendText}>
            Send
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
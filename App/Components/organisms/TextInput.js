import React from 'react';
import { Text, View, TextInput as Input, TouchableOpacity } from 'react-native';
import { style } from './TextInput.style';
import { Colors } from '../../Theme';

export class TextInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChangeText = (text) => {
    const {
      onChange,
      input: { onChange: inputOnChange },
    } = this.props;

    if (onChange) {
      onChange(text);
    }
    if (inputOnChange) {
      inputOnChange(text);
    }
    this.setState({ text });
  };

  handleSend = () => {
    const { onSend } = this.props;
    onSend();
    this.handleChangeText('');
    this.input.clear();
  };

  render() {
    const { styles, placeholder, returnKeyType } = this.props;

    return (
      <View style={style.container}>
        <Input
          ref={(ref) => (this.input = ref)}
          style={[style.input, styles]}
          placeholder={placeholder || '...'}
          placeholderTextColor={Colors.lightGray}
          onChangeText={this.handleChangeText}
          onSubmitEditing={this.handleSend}
          blurOnSubmit={false}
          autoCorrect
          returnKeyType={returnKeyType || 'go'}
        />
        <TouchableOpacity onPress={this.handleSend} style={style.sendButton}>
          <Text style={style.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

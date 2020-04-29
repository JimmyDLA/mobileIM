import React from 'react';
import {
  Text,
  View, 
  Image,
} from 'react-native';
import { style } from './Message.style';

export class Message extends React.PureComponent {
  render() {
    const { data: { pic, name, email, message }, myEmail } = this.props;
    const isSelf = myEmail === email;
    return !isSelf ? (
      <View style={style.container}>
        <Image style={style.pic} source={{uri: pic}} />
        <View style={style.messageContainer}>
          <Text style={style.name}>
            {name}:
          </Text>
          <Text style={style.message}>
            {message}
          </Text>
        </View>
      </View>
    ) : (
      <View style={[style.container, style.self]}>
        <View style={style.messageContainer}>
          <Text style={style.name}>
            {name}:
          </Text>
          <Text style={style.message}>
            {message}
          </Text>
        </View>
        <Image style={style.pic} source={{uri: pic}} />
      </View>
    )
  }
}
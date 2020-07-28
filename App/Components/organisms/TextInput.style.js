import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Colors } from '../../Theme';

export const style = StyleSheet.create({
  container: {
    height: hp(10),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: Colors.transparent,
  },
  input: {
    paddingLeft: 15,
    borderRadius: 20,
    height: hp(5),
    width: '70%',
    borderWidth: 1,
    borderColor: Colors.lightGray,
    // backgroundColor: 'rgb(230, 243, 255)',
    color: Colors.lightGray,
  },
  sendButton: {
    height: hp(5),
    width: '20%',
    borderRadius: 20,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendText: {
    color: 'rgb(255,255,255)',
  },
});

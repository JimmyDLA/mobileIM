import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const style = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingBottom: 10,
  },
  pic: {
    height: hp(7),
    width: hp(7),
    borderRadius: 40,
  },
  messageContainer: {
    backgroundColor: 'rgba(150,150,150,0.5)',
    padding: wp(1.5),
    paddingHorizontal: wp(5),
    borderRadius: 20,
    maxWidth: wp(73.5),
    marginLeft: wp(3),
    marginRight: wp(3),
    justifyContent: 'center',
  },
  name: {
    color: 'white',
    textDecorationLine: 'underline',
  },
  message: {
    color: 'white',
    fontSize: hp(2),
  },
  selfContainer: {
    justifyContent: 'flex-end',
  },
  selfMessage: {
    backgroundColor: 'rgb(18,150,250)',
  },
});

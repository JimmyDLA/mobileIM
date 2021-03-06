import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Colors } from '../../Theme';

export const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkGray,
    height: '100%',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    height: hp(20),
  },
});

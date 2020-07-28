import { StyleSheet, Platform } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Colors } from '../../Theme';

const containerDropShadow = Platform.select({
  android: {
    elevation: 2,
  },
  ios: {
    shadowColor: 'rgb(50,50,50)',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
  },
});

export const style = StyleSheet.create({
  button: {
    width: 250,
    height: 50,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    ...containerDropShadow,
    marginTop: 20,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

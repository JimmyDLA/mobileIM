import { StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const style = StyleSheet.create({
  container: { 
    height: hp(10),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: { 
    paddingLeft: 15,
    borderRadius: 20,
    height: hp(5),
    width: '70%',
    backgroundColor: 'rgb(230, 243, 255)',
  },
  sendButton: { 
    height: hp(5),
    width: '20%',
    borderRadius: 20,
    backgroundColor: 'rgb(51, 156, 255)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendText: { 
    color: 'rgb(255,255,255)'
  },
})
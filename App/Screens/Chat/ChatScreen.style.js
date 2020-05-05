import { StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export const style = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(230,230,230)',
    height: '100%', 
    width: '100%', 
    justifyContent: 'space-around', 
    alignItems: 'center',
  },
  board: { 
    backgroundColor: 'rgb(230,230,230)',
    width: wp(100),
    paddingTop: 20,
    paddingHorizontal: wp(3),
    justifyContent: 'flex-start',
  },
})

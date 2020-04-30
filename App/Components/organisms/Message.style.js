import { StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export const style = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingBottom: 10,
  },
  pic: { 
    height: hp(8),
    width: hp(8),
    borderRadius: 40,
  },
  messageContainer: { 
    backgroundColor: 'rgb(87,211,207)',
    padding: wp(1.5),
    paddingHorizontal: wp(5),
    borderRadius: 20,
    maxWidth: wp(76),
    marginLeft: wp(3),
    marginRight: wp(3),
  },
  name: { 
    color: 'white',
  },
  message: { 
    color: 'white',
    fontSize: hp(3),
  },
  selfContainer: { 
    justifyContent: 'flex-end',
  },
  selfMessage: { 
    backgroundColor: 'rgb(18,150,250)',
  },
})

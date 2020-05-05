import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import { GOOGLE_LOGIN, NEW_ACCOUNT, setUserInfo } from '../Redux/modules/welcome';
import { startChat } from '../Redux/modules/chat';

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */

function* doGoogleLogin(action) {
  try {
    const signIn = async () => {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const { user: { email, givenName: name, photo: pic } } = userInfo;
      return { email, name, pic };
    };

    const userData = yield call(signIn);
    yield put(setUserInfo(userData));
    yield put(startChat());
  } catch (error) {
    console.warn(error);
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};

function* doNewAccount(action) {
  try {
    // fetch users;
    const url = 'https://randomuser.me/api/';
    const response = yield call(axios.get, url);
    if (response) { 
      const { results } = response.data;
      const [user] = results;
      const email = user.email;
      const name = user.name.first;
      const pic = user.picture.large;
      yield put(setUserInfo({ email, name, pic }));
    }
    yield put(startChat());
  } catch (error) {
    console.log(`[catch error] ${error}`)
  }
}

export function* watchWelcome() {
  yield takeEvery(GOOGLE_LOGIN, doGoogleLogin);
  yield takeEvery(NEW_ACCOUNT, doNewAccount);
}

import { take, call, put, takeEvery } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import NavigationService from 'App/Services/NavigationService';
import axios from 'axios';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import { GOOGLE_LOGIN, NEW_ACCOUNT, setUserInfo } from '../Redux/modules/welcome';
import { incomingMessage, SEND_MESSAGE } from '../Redux/modules/chat';

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */

let socketChannel = {};
let socket = {};

function* doGoogleLogin(action) {
  try {
    const signIn = async () => {
      debugger
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const { user: { email, givenName: name, photo: pic } } = userInfo;
      debugger
      return { email, name, pic };
    };
    const userData = yield call(signIn);
    yield put(setUserInfo(userData));
    yield NavigationService.navigate('ChatScreen');
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

const createSocketConnection = () => new Promise((resolve, reject) => {
  try {
    const socketUrl = 'ws://localhost:4001/';
    const socket = new WebSocket(socketUrl);
    debugger
    socket.onopen = () => {
      console.log('socket is open');
      resolve(socket);
    };
    return socket;
  } catch (error) {
    reject(error);
  }
});

function createSocketChannel (socket) {
  return eventChannel(emit => {    
    debugger
    socket.onmessage = event => {
      let { data } = event;
      data = JSON.parse(data);
      debugger
    //   const { success } = data;
    //   if (success) {
    // debugger

        emit({ data });  
      // }
    };

    socket.onerror = event => {
      emit({ error: event });
    };

    socket.onclose = () => {
      emit({ data: socket });
    };

    const unsubscribe = () => {
      socket.onmessage = null;
    };

    return unsubscribe;
  });
}

function* doNewAccount(action) {
  try {
    // fetch users;
    const url = 'https://randomuser.me/api/';
    const response = yield call(axios.get, url);
    if (response) { 
      // grab name, pic
      const { results } = response.data;
      const [user] = results;
      const email = user.email;
      const name = user.name.first;
      const pic = user.picture.large;
      yield put(setUserInfo({ email, name, pic }));
    }
    socket = yield call(createSocketConnection);
    debugger

    socketChannel = yield call(createSocketChannel, socket);
    yield NavigationService.navigate('ChatScreen');

    while (socketChannel) {
      const { data } = yield take(socketChannel);
      if (data.message) {
        // update redux
        debugger
        yield put(incomingMessage(data))
      }
    }
  } catch (error) {
    console.log(`[catch error] ${error}`)
  }
}

function* doSendMessage(action) {
  try {
    debugger
    let { data } = action;
    data = JSON.stringify(data);
    socket.send(data);
  } catch (error) {
    console.log(`[catch error] ${error}`)
  }
}

export function* watchWelcome() {
  yield takeEvery(GOOGLE_LOGIN, doGoogleLogin);
  yield takeEvery(NEW_ACCOUNT, doNewAccount);
  yield takeEvery(SEND_MESSAGE, doSendMessage);
}

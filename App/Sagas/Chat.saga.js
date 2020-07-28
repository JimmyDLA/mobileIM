import { take, call, put, select, takeEvery } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import NavigationService from 'App/Services/NavigationService';
import { incomingMessage, SEND_MESSAGE, GO_BACK, START_CHAT } from '../Redux/modules/chat';

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */

let socketChannel = {};
let socket = {};

export function* doGoBack() {
  try {
    NavigationService.navigate('MainScreen');
  } catch (error) {
    console.warn(error);
  }
}

const createSocketConnection = () =>
  new Promise((resolve, reject) => {
    try {
      const socketUrl = 'ws://localhost:4001/';
      const socket = new WebSocket(socketUrl);

      socket.onopen = () => {
        console.log('socket is open');
        resolve(socket);
      };
      return socket;
    } catch (error) {
      reject(error);
    }
  });

function createSocketChannel(socket) {
  return eventChannel((emit) => {
    socket.onmessage = (event) => {
      let { data } = event;
      data = JSON.parse(data);
      debugger;
      emit({ data });
    };
    socket.onerror = (event) => {
      console.log(`[socket onerror]: ${event}`);
      emit({ error: event });
    };
    socket.onclose = (event) => {
      console.log(`[socket onerror]: ${event}`);
      emit({ data: socket });
    };

    const unsubscribe = () => {
      socket.onmessage = null;
    };

    return unsubscribe;
  });
}

function* doStartChat() {
  try {
    const {
      user: { email },
    } = yield select((state) => state.welcome);

    socket = yield call(createSocketConnection);
    socketChannel = yield call(createSocketChannel, socket);

    yield NavigationService.navigate('ChatScreen');

    while (socketChannel) {
      let {
        user: { email },
      } = yield select((state) => state.welcome);
      const { data } = yield take(socketChannel);
      if (data.message && email !== data.email) {
        yield put(incomingMessage(data));
      }
    }
  } catch (error) {
    console.log(`[catch error] ${error}`);
  }
}

function* doSendMessage(action) {
  try {
    let { data } = action;
    yield put(incomingMessage(data));

    data = JSON.stringify(data);
    socket.send(data);
  } catch (error) {
    console.log(`[catch error] ${error}`);
  }
}

export function* watchChat() {
  yield takeEvery(GO_BACK, doGoBack);
  yield takeEvery(SEND_MESSAGE, doSendMessage);
  yield takeEvery(START_CHAT, doStartChat);
}

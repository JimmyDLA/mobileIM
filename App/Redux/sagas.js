import { all, fork } from 'redux-saga/effects';
// import formActionSaga from 'redux-form-saga';

//import all SAGAS
import { watchWelcome } from '../Sagas/Welcome.saga';
import { watchLogin } from '../Sagas/Login.saga';
import { watchChat } from '../Sagas/Chat.saga';

export function* sagas() {
  yield all([
    // fork(formActionSaga),
    fork(watchWelcome),
    fork(watchLogin),
    fork(watchChat),
  ]);
}

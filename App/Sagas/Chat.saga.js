import { fork, takeEvery } from 'redux-saga/effects'
import NavigationService from 'App/Services/NavigationService'
import { GO_BACK } from '../Redux/modules/chat';

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* doGoBack() {
  try {
    NavigationService.navigate('MainScreen');
  } catch (error) {
    console.warn(error);
  }
};

export function* watchChat() {
  yield takeEvery(GO_BACK, doGoBack);
}

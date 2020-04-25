import { takeEvery, fork } from 'redux-saga/effects'
import NavigationService from 'App/Services/NavigationService'
import { GO_BACK } from '../Redux/modules/login';

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* doGoBack() {
  try {
    // When those operations are finished we redirect to the main screen
    NavigationService.navigate('MainScreen');
  } catch (error) {
    console.warn(error);
  }
};
export function* watchLogin() {
  yield takeEvery(GO_BACK, doGoBack);
}

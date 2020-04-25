import { fork, takeEvery } from 'redux-saga/effects'
import NavigationService from 'App/Services/NavigationService'
import { GOOGLE_LOGIN, GO_TO_CHAT} from '../Redux/modules/welcome';

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
function* doGoogleLogin(action) {
  try {
    // When those operations are finished we redirect to the main screen
    debugger
    NavigationService.navigate('Modal');
  } catch (error) {
    console.warn(error);
  }
};

function* doGoToChat(action) {
  try {
    NavigationService.navigate('ChatScreen');
  } catch (error) {
    
  }
}
export function* watchWelcome() {
  yield takeEvery(GOOGLE_LOGIN, doGoogleLogin);
  yield takeEvery(GO_TO_CHAT, doGoToChat);
}

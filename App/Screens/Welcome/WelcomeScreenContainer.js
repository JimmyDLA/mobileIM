import { connect } from 'react-redux'
import { googleLogin, goToChat } from 'App/Redux/modules/welcome';
import { WelcomeScreen } from './WelcomeScreen';

mapDispatchToProps = {
  googleLogin,
  goToChat,
};

export default connect(
  null,
  mapDispatchToProps,
)(WelcomeScreen);

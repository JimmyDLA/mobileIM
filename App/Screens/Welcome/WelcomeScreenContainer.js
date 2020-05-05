import { connect } from 'react-redux'
import { googleLogin, newAccount } from 'App/Redux/modules/welcome';
import { WelcomeScreen } from './WelcomeScreen';

mapDispatchToProps = {
  googleLogin,
  newAccount,
};

export default connect(
  null,
  mapDispatchToProps,
)(WelcomeScreen);

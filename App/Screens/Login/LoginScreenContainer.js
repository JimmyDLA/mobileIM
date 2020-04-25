import { connect } from 'react-redux';
import { goBack } from 'App/Redux/modules/login';
import { LoginScreen } from './LoginScreen';

mapDispatchToProps = {
  goBack,
};

export default connect(
  null,
  mapDispatchToProps,
)(LoginScreen);
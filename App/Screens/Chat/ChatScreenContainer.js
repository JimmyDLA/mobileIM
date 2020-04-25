import { connect } from 'react-redux';
import { goBack } from 'App/Redux/modules/chat';
import { ChatScreen } from './ChatScreen';

mapDispatchToProps = {
  goBack,
};

export default connect(
  null,
  mapDispatchToProps,
)(ChatScreen);

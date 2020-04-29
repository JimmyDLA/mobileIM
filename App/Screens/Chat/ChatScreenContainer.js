import { connect } from 'react-redux';
import { goBack, sendMessage } from 'App/Redux/modules/chat';
import { ChatScreen } from './ChatScreen';

mapStateToProp = ({
  welcome: {
    user
  } = {},
  chat: {
    messageLog
  }
}) => ({
  user,
  messageLog,
});

mapDispatchToProps = {
  goBack,
  sendMessage,
};

export default connect(
  mapStateToProp,
  mapDispatchToProps,
)(ChatScreen);

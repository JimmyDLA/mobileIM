import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { goBack, sendMessage } from 'App/Redux/modules/chat';
import { ChatScreen } from './ChatScreen';

export const formConfig = {
  form: 'messenger',
  persistentSubmitErrors: false,
};

mapStateToProp = ({
  form: {
    messenger: {
      values: {
        message ='',
      } = {},
    } = {},
  } = {},
  welcome: {
    user
  } = {},
  chat: {
    messageLog
  }
}) => ({
  messageLog,
  message,
  user,
});

mapDispatchToProps = {
  goBack,
  sendMessage,
};

export default connect(
  mapStateToProp,
  mapDispatchToProps,
  null, 
  { forwardRef: true }
)(reduxForm(formConfig)(ChatScreen));

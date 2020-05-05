// Actions
export const GO_BACK = 'mobileim/chat/GO_BACK';
export const NEW_MSG_LOG = 'mobileim/chat/NEW_MSG_LOG';
export const SEND_MESSAGE = 'mobileim/chat/SEND_MESSAGE';
export const START_CHAT = 'mobileim/chat/START_CHAT';

// Initial State
export const initialState = {
  messageLog: [],
};

// Reducer
export const chat = (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case GO_BACK:
      return { ...state};
    case NEW_MSG_LOG: 
      return { ...state, messageLog: [...state.messageLog, data]};
    default:
      return state;
  }
};

// Action creators
export const goBack = () =>({ type: GO_BACK});
export const incomingMessage = data => ({ type: NEW_MSG_LOG, data })
export const sendMessage = data => ({ type: SEND_MESSAGE, data })
export const startChat = data => ({ type: START_CHAT  })

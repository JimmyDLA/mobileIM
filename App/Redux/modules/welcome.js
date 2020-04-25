// Actions
export const GOOGLE_LOGIN = 'mobileim/welcome/GOOGLE_LOGIN';
export const GO_TO_CHAT = 'mobileim/welcome/GO_TO_CHAT';

// Initial State
export const initialState = {

};

// Reducer
export const welcome = (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    
    case GOOGLE_LOGIN:
      return { ...state, onSplash: data };

    default:
      return state;
  }
};

// Action creators
export const googleLogin = data => ({ type: GOOGLE_LOGIN, data });
export const goToChat = () => ({ type: GO_TO_CHAT });

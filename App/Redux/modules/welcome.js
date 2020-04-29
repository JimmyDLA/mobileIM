// Actions
export const GOOGLE_LOGIN = 'mobileim/welcome/GOOGLE_LOGIN';
export const NEW_ACCOUNT = 'mobileim/welcome/NEW_ACCOUNT';
export const SET_USER_INFO = 'mobileim/welcome/SET_USER_INFO';

// Initial State
export const initialState = {
  user: {},
};

// Reducer
export const welcome = (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    
    case SET_USER_INFO:
      return { ...state, user: data };

    default:
      return state;
  }
};

// Action creators
export const googleLogin = data => ({ type: GOOGLE_LOGIN, data });
export const newAccount = () => ({ type: NEW_ACCOUNT });
export const setUserInfo = data => ({ type: SET_USER_INFO, data });

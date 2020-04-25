// Actions
export const GO_BACK = 'mobileim/login/GO_BACK';

// Initial State
export const initialState = {
  login: false,
};

// Reducer
export const login = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case GO_BACK:
      return { ...state };

    default:
      return state;
  }
};

// Action creators
export const goBack = () =>({ type: GO_BACK});

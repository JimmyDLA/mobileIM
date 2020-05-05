import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

//import all Reducers
import { welcome } from './modules/welcome';
import { login } from './modules/login';
import { chat } from './modules/chat';

export const reducerList = {
  form,
  welcome,
  login,
  chat,
};

export const reducers = combineReducers(reducerList);

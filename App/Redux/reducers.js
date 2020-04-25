import { combineReducers } from 'redux';

//import all Reducers
import { welcome } from './modules/welcome';
import { login } from './modules/login';
import { chat } from './modules/chat';

export const reducerList = {
  welcome,
  login,
  chat,
};

export const reducers = combineReducers(reducerList);

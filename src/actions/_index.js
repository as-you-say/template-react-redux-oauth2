import API from '../apis/_index';

export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const getCurrentUser = () => ({
  type: GET_CURRENT_USER,
  payload: API.getCurrentUser()
});

export const LOGIN = 'LOGIN';
export const login = () => ({
  type: LOGIN,
  payload: API.login()
});

export const SIGNUP = 'SIGNUP';
export const signup = () => ({
  type: SIGNUP,
  payload: API.signup()
});
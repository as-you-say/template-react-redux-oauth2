import API from '../apis/_index';

export const GET_USERS = 'GET_USERS';
export const getUsers = () => ({
  type: GET_USERS,
  payload: API.getUsers(),
});
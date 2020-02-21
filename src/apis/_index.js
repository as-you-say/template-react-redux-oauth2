import axios from 'axios';
import { OAuth2APIRequest } from './request';

async function getCurrentUser() {
  const { data } = await OAuth2APIRequest({
    url: "/user/me",
    method: 'GET'
  });
  return data;
}

async function login(loginRequest) {
  const { data } = await OAuth2APIRequest({
    url: "/auth/login",
    method: 'POST',
    body: JSON.stringify(loginRequest)
  });
  return data;
}

async function signup(signupRequest) {
  const { data } = await OAuth2APIRequest({
    url: "/auth/signup",
    method: 'POST',
    body: JSON.stringify(signupRequest)
  });
  return data;
}

// User
const getUsers = async () => {
  const { data } = await axios.get("http://dev-node-rest-api.herokuapp.com/ingredient?limit=100");
  return data;
}

export default {
  getCurrentUser,
  login,
  signup,
  getUsers
}


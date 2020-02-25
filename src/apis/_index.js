import { OAuth2APIRequest } from './request';

async function getCurrentUser() {
  const data = await OAuth2APIRequest({
    url: "/user/me",
    method: 'GET'
  });
  return data;
}

async function login(loginRequest) {
  const token = await OAuth2APIRequest({
    url: "/auth/login",
    method: 'POST',
    body: JSON.stringify(loginRequest)
  });
  console.log("token", token);
  return token;
}

async function signup(signupRequest) {
  const { data } = await OAuth2APIRequest({
    url: "/auth/signup",
    method: 'POST',
    body: JSON.stringify(signupRequest)
  });
  console.log();
  return data;
}

export default {
  getCurrentUser,
  login,
  signup
}


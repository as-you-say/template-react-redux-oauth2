import {
  OAuth2API
} from './instance';

export const OAuth2APIRequest = (options) => {
  const LOGIN_URL = "/auth/login";
  const SIGN_UP_URL = "/auth/signup";

  if([LOGIN_URL, SIGN_UP_URL].indexOf(options.url) === -1){
    OAuth2API.isToken();
  }

  OAuth2API.authenticate();
  return OAuth2API.instance(options).then(res => res);
};
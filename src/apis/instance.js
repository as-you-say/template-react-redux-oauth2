import axios from 'axios';
import {
  OAUTH2API_BASE_URL,
  OAUTH2API_ACCESS_TOKEN
} from '../constants/_index';

// OAuth2API - 인스턴스
export const OAuth2API = (function() {
  const instance = axios.create({
    baseURL: OAUTH2API_BASE_URL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json'
    },
  });

  function authenticate(){
    const token = localStorage.getItem(OAUTH2API_ACCESS_TOKEN);
    if(token) {
      instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }

  function isToken(){
    if(!localStorage.getItem(OAUTH2API_ACCESS_TOKEN)){
      return Promise.reject("No access token set.");
    }
  }

  return {
    instance,
    authenticate,
    isToken
  }
})();
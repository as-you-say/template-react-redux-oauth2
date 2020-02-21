// OAuth2API - 인스턴스
export const OAuth2API = (function() {
  const tokenKey = 'accessToken';
  const url = "http://localhost:8080/";
  const instance = axios.create({
    baseURL: url,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json'
    },
  });

  function authenticate(){
    const accessToken = localStorage.getItem(tokenKey);
    if(accessToken) {
      instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    }
  }

  function isToken(){
    if(!localStorage.getItem(tokenKey)){
      return Promise.reject("No access token set.");
    }
  }

  return {
    instance,
    authenticate,
    isToken
  }
})();
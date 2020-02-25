// 기본 상수
export const OAUTH2API_ACCESS_TOKEN = 'accessToken';
export const OAUTH2API_BASE_URL = 'http://localhost:8080';
export const OAUTH2API_REDIRECT_URI = 'http://localhost/oauth2/redirect';

// 소셜 로그인 URL
export const GOOGLE_AUTH_URL = `${OAUTH2API_BASE_URL}/oauth2/authorize/google?redirect_uri=${OAUTH2API_REDIRECT_URI}`;
export const FACEBOOK_AUTH_URL = `${OAUTH2API_BASE_URL}/oauth2/authorize/facebook?redirect_uri=${OAUTH2API_REDIRECT_URI}`;
export const GITHUB_AUTH_URL = `${OAUTH2API_BASE_URL}/oauth2/authorize/github?redirect_uri=${OAUTH2API_REDIRECT_URI}`;

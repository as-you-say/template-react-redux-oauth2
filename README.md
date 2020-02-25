# React + Redux  OAuth2 토큰 인증 템플릿 프로젝트

## 개발환경
- React/Redux
- Webpack 4.x
- Babel >=7.4

## async/await 환경
- babel-plugin-transform-regenerator 설치
- @babel/preset-env 최신버전이 polyfill을 지원한다고 나와있었으나 
  IE 9 까지 지원하도록 별도로 @babel/polyfill 을 설치하여 Webpack entry 에 추가
  
## 프로세스
### 1. 로그인 요청
#### 1.1 소셜 로그인 - Redirect URL 을 통한 토큰 발급 (location)
- BASE_URL : http://localhost:8080
- AUTHORIZE_URL : ${BASE_URL}/oauth2/authorize/${SOCIAL} (SOCIAL: google, github)
- SOCIAL_LOGIN_URL : ${AUTHORIZE_URL}?redirect_uri=http://localhost/oauth2/redirect
#### 1.2 로컬 로그인 - Response 를 통한 토큰 발급 (axios)
- BASE_URL : http://localhost:8080
- LOCAL_LOGIN_URL : ${BASE_URL}/auth/login

### 2. 토큰/에러 발급
#### 2.1 소셜 토큰
- 토큰 : http://localhost/oauth2/redirect?token=... 
- 에러 : http://localhost/oauth2/redirect?error=...
#### 2.2 로컬 토큰
- 토큰 : { accessToken : ... }

### 3. 토큰 저장 (localStorage)
#### 3.1 소셜 토큰
- URL 파라미터의 token 값을 가져와서 localStorage 에 저장
- 핸들러 : <Route to="oauth2/redirect" component={OAuth2RedirectHandler}>
#### 3.2 로컬 토큰
- [액션 -> 리듀서] 에서 리턴받은 accessToken 값을 가져와서 localStorage 에 저장

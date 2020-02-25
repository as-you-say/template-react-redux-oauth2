import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
  return (
    <div>
      <div>
        <h1>Login to SpringSocial</h1>
        <div>
          <a href="#">Log in with Google</a>
          <a href="#">Log in with Facebook</a>
          <a href="#">Log in with Github</a>
        </div>
        <div>
          <span>OR</span>
        </div>
        <form>
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button type="submit">Login</button>
        </form>
        <span>New user? <Link to="/signup">Sign up!</Link></span>
      </div>
    </div>
  );
}
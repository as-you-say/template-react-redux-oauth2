import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="login-title">Login to SpringSocial</h1>
        <div>
          <a href="#">Log in with Google</a>
          <a href="#">Log in with Facebook</a>
          <a href="#">Log in with Github</a>
        </div>
        <div className="or-separator">
          <span className="or-text">OR</span>
        </div>
        <form>
          <input type="email" placeholder="Email" required
            name="email" />
          <input type="password" placeholder="Password" required
            name="password" />
          <button type="submit">Login</button>
        </form>
        <span className="signup-link">New user? <Link to="/signup">Sign up!</Link></span>
      </div>
    </div>
  );
}
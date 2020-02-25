import React from 'react';

export default function () {
  return (
    <div className="signup-container">
      <form>
        <input type="text" name="name" placeholder="Name"/>
        <input type="email" name="email" placeholder="Email"/>
        <input type="password" name="password" placeholder="Password"/>
        <button type="submit">Sign Up</button>
      </form>
      <span className="login-link">Already have an account? <a href="#">Login!</a></span>
    </div>
  );
}
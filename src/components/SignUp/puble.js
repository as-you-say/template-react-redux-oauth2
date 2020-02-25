import React from 'react';

export default function () {
  return (
    <div className="signup-container">
      <div className="signup-content">
        <form>
          <div className="form-item">
            <input type="text" name="name" 
              className="form-control" placeholder="Name"required/>
          </div>
          <div className="form-item">
            <input type="email" name="email" 
              className="form-control" placeholder="Email" required/>
          </div>
          <div className="form-item">
            <input type="password" name="password" 
              className="form-control" placeholder="Password" required/>
          </div>
          <div className="form-item">
            <button type="submit" className="btn btn-block btn-primary" >Sign Up</button>
          </div>
        </form>     
        <span className="login-link">Already have an account? <a href="#">Login!</a></span>
      </div>
    </div>
  );
}
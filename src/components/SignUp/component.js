import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './style.scss';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
        [name] : value
    });
  }

  handleSubmit(event) {
    event.preventDefault();   
    const signUpRequest = Object.assign({}, this.state);
    this.props.signup(signUpRequest);
  }

  render() {
    return (
      <div className="signup-container">
        <div className="signup-content">
          <form onSubmit={this.handleSubmit}>
            <div className="form-item">
              <input type="text" name="name" 
                className="form-control" placeholder="Name"
                value={this.state.name} onChange={this.handleInputChange} required/>
            </div>
            <div className="form-item">
              <input type="email" name="email" 
                className="form-control" placeholder="Email"
                value={this.state.email} onChange={this.handleInputChange} required/>
            </div>
            <div className="form-item">
              <input type="password" name="password" 
                className="form-control" placeholder="Password"
                value={this.state.password} onChange={this.handleInputChange} required/>
            </div>
            <div className="form-item">
              <button type="submit" className="btn btn-block btn-primary" >Sign Up</button>
            </div>
          </form>     
          <span className="login-link">Already have an account? <Link to="/login">Login!</Link></span>
        </div>
      </div>
    );
  }
}
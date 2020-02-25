import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { 
  GOOGLE_AUTH_URL, 
  FACEBOOK_AUTH_URL, 
  GITHUB_AUTH_URL, 
  OAUTH2API_ACCESS_TOKEN } from '../../constants/_index';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.props.location);
    const { pathname } = this.props.location;
    setTimeout(() => {
      this.props.history.replace({
        pathname,
        state: {}
      });
    }, 100);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
        [name] : value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const loginRequest = Object.assign({}, this.state);
    this.props.login(loginRequest);

    localStorage.setItem(OAUTH2API_ACCESS_TOKEN, this.props.accessToken);
    this.props.history.push("/");
  }
    
  render() {
    return (
      <div className="login-container">
        <div className="login-content">
          <h1 className="login-title">Login to SpringSocial</h1>
          <div>
            <a href={GOOGLE_AUTH_URL}>Log in with Google</a>
            <a href={FACEBOOK_AUTH_URL}>Log in with Facebook</a>
            <a href={GITHUB_AUTH_URL}>Log in with Github</a>
          </div>
          <div className="or-separator">
            <span className="or-text">OR</span>
          </div>
          <form onSubmit={this.handleSubmit}>
            <input type="email" placeholder="Email" required
              name="email"
              value={this.state.email} 
              onChange={this.handleInputChange} />
            <input type="password" placeholder="Password" required
              name="password"
              value={this.state.password} 
              onChange={this.handleInputChange} />
            <button type="submit">Login</button>
          </form>
          <span className="signup-link">New user? <Link to="/signup">Sign up!</Link></span>
        </div>
      </div>
    );
  }
}
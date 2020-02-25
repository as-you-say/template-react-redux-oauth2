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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Name"
            value={this.state.name} 
            onChange={this.handleInputChange} />
          <input type="email" name="email" placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChange} />
          <input type="password" name="password" placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}/>
          <button type="submit">Sign Up</button>
        </form>     
        <span>Already have an account? <Link to="/login">Login!</Link></span>
      </div>
    );
  }
}
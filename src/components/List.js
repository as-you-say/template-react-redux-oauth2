import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getUsers
} from '../actions/_index'

export class List extends Component {
  componentDidMount(){
    this.props.getUsers();
  }

  render() {
    const users = this.props.users;
    return (
      <ul>
        {users.map((user) => (
          <li>{user.username}</li>
        ))}
      </ul>
    )
  }
}

function mapStateToProps (state) {
  console.log('state', state)
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getUsers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List)

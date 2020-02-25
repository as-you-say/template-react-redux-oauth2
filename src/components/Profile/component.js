import React, { Component } from 'react';
import { authenticate } from '../utils';

export default class Profile extends Component {
  constructor(props) {
      super(props);
  }

  componentDidMount(){
    this.props.getCurrentUser();
  }

  render() {
    authenticate(this.props);
    if(this.props.currentUser){
      const { imageUrl, name, email } = this.props.currentUser;
      return (
        <div>
          {imageUrl 
            ? (<img src={imageUrl} alt={name}/>) 
            : (<span>{name && name[0]}</span>)}
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      );
    } else {
      return <div>로딩중 ...</div>
    }
  }
}
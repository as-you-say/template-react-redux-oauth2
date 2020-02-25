import React, { Component } from 'react';
import { OAUTH2API_ACCESS_TOKEN } from '../../constants/_index';
import { Redirect } from 'react-router-dom';

export default class OAuth2RedirectHandler extends Component {
    getUrlParameter(name) {
      let GETParams = GETParams || {};
      let url = url || "";
      url = location.href;

      const parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&');
      const size = parameters.length;
      for (var i = 0; i < size; i++) {
          var key = parameters[i].split('=')[0]
          var value = parameters[i].split('=')[1]
          GETParams[key] = value
      }

      return GETParams[name];
    };

    render() {
      console.log("리다이렉트~");
      const token = this.getUrlParameter('token');
      const error = this.getUrlParameter('error');

      if(token) {
        localStorage.setItem(OAUTH2API_ACCESS_TOKEN, token);
        return <Redirect to={{
          pathname: "/profile",
          state: { from: this.props.location }
        }}/>; 
      } else {
        return <Redirect to={{
          pathname: "/login",
          state: { 
            from: this.props.location,
            error: error 
          }
        }}/>;
      }
    }
}
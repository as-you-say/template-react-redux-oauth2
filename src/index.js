import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import reducers from './reducers/_index';

import {
  authenticated
} from './actions/_index';

import OAuth2Redirect from './components/OAuth2RedirectHandler/component';

import Home from './components/Home/component';
import Login from './components/Login/container';
import Profile from './components/Profile/container';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/oauth2/redirect" component={OAuth2Redirect}></Route>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

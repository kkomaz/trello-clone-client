import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './containers/App';
import About from './components/About';
import ListPage from './containers/ListPage';
import Login from './containers/Auth/Login';
import Signup from './containers/Auth/Signup';
import { setAxiosHeaders } from './containers/Auth/utils/session.js';

export default function configAuthenticatedRoutes() {
  const enforceSessionandHeaders = (nextState, replace, callback) => {
    setAxiosHeaders();
    callback();
  };

  return (
    <Route>
      <Route path='sign-up' component={Signup} />
      <Route path='/' component={App} onEnter={enforceSessionandHeaders}>
        <IndexRoute component={About} />
        <Route path='login' component={Login} />
        <Route path='/about' component={About} />
        <Route path='/list' component={ListPage} />
      </Route>
    </Route>
  );
}

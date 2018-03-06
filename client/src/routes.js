import React from 'react';  
import { Route } from 'react-router'; 

import App from './components/App';  
import HomePage from './components/App';  
import RegisterForm from './components/forms/RegisterForm';
import LoginForm from './components/forms/LoginForm';


export default (  
  <Route path="/" component={App}>
    <Route exact path="/" component={HomePage} />
    <Route path="/register" component={RegisterForm} />
    <Route path="/login" component={LoginForm} />
  </Route>
);

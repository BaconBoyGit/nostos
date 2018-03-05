import React from 'react';
// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import Header from './common/Header';
import Welcome from './maps/WelcomeMap';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';
import Footer from './common/Footer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Header />
            <Route exact path="/" component={Welcome} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/register" component={RegisterForm} />
            <Footer />
        </div>
      </Router>
    );
  }
}


export default App;

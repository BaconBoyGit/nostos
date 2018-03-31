import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types'; 
import {
  connect
} from 'react-redux'

// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

// Components to be loaded
import Header from '../components/common/Header';
import Welcome from '../components/maps/WelcomeMap';
import RegisterForm from '../components/forms/RegisterForm';
import Profile from '../components/common/Profile';
import Footer from '../components/common/Footer';
import Status from '../components/forms/Status';
import Permit from '../components/forms/Permit';

class App extends Component {
  render() {
    
    // Bring in our proptypes
    const { dispatch, name, isAuthenticated, errorMessage, isPrivate } = this.props

    return (
      <Router>
        <div className="App">
            <Header 
                isAuthenticated={isAuthenticated}
                errorMessage={errorMessage}
                dispatch={dispatch}
            />
            <Route exact path="/" component={Welcome} />
            <Route exact path="/register" component={RegisterForm} />
            <Route exact path="/status" component={Status} />
            <Route exact path="/permit" component={Permit} />
            <Footer />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  name: PropTypes.string,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  isPrivate: PropTypes.bool.isRequired
}

// These props come from the application's
// state when it is started
function mapStateToProps(state) {

  const { info, auth } = state
  const { name, authenticated } = info
  const { isAuthenticated, errorMessage } = auth

  return {
    name,
    isPrivate: authenticated,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(App);

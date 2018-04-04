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

import { fetchUser } from '../actions/actions';

class App extends Component {
  render() {
    
    // Bring in our proptypes
    const { dispatch, userData, isAuthenticated, errorMessage } = this.props

    return (
      <Router>
        <div className="App">
            <Header 
                isAuthenticated={isAuthenticated}
                errorMessage={errorMessage}
                dispatch={dispatch}
            />
            { errorMessage &&  <div class="t--subinfo t--err m-t100"> { errorMessage } </div>}
            <Route exact path="/" component={Welcome} />
            <Route exact path="/register" component={RegisterForm} />
            <Route 
                exact path="/profile" 
                render={()=><Profile 
                  dispatch={dispatch}
                  isAuthenticated={isAuthenticated}
                />} 
            />
            <Footer />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userData: PropTypes.string,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
}

// These props come from the application's
// state when it is started
function mapStateToProps(state) {

  const { info, auth } = state
  const { userData, authenticated } = info
  const { isAuthenticated, errorMessage } = auth

  return {
    userData,
    isPrivate: authenticated,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(App);

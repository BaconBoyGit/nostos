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
  Redirect,
} from 'react-router-dom'

// Components to be loaded
import Header from '../components/common/Header';
import Welcome from '../components/maps/WelcomeMap';
import Register from '../components/forms/Register';
import Profile from '../components/common/Profile';
import Footer from '../components/common/Footer';
import Status from '../components/forms/Status';
import Permit from '../components/forms/Permit';

import { fetchUser } from '../actions/actions';

class App extends Component {

  render() {
    
    // Bring in our proptypes
    const { dispatch, isAuthenticated, errorMessage, user } = this.props

    const errorStyle = {
      position: "fixed",
      background: "white"
    }

    
    return (
      <Router>
        <div className="App">
           
            <Header 
                isAuthenticated={isAuthenticated}
                errorMessage={errorMessage}
                dispatch={dispatch}
            />
            
            { errorMessage &&  alert( errorMessage )  }
            
            <Route exact path="/" component={ Welcome } />
            <Route 
                exact path="/register" 
                render={ () =>
                isAuthenticated === false // Redirect authenticated users to prevent double registration
                ? <Register
                  dispatch = { dispatch }
                  errorMessage = { errorMessage }
                />
                : <Redirect to= '/' />
              }
            />
            <Route 
                exact path="/profile" 
                render={()=>
                  isAuthenticated === true // Redirect unauthenticated users to avoid profile access
                  ? <Profile 
                    isAuthenticated={ isAuthenticated }
                    user = { user }
                  />
                  : <Redirect to='/' />
                } 

            />
            <Route 
              exact path ="/status"
              render={()=>
                isAuthenticated === true // Redirect unauthenticated users to avoid status access
                ? <Status 
                  isAuthenticated={ isAuthenticated }
                  user = { user }
                />
                : <Redirect to='/' />
              } />
              <Route 
              
              exact path="/permit" component = {Permit} />

          <Footer />

        </div>
      </Router>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
}

// These props come from the application's
// state when it is started
function mapStateToProps(state) {

  const { auth } = state
  const { isAuthenticated, errorMessage, user } = auth

  return {
    user,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(App);

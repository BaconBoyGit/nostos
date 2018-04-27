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
import { fetchPermit } from '../actions/actions';

/*
   Used to create the routes for the different pages
   as well as set up the general structure 
   
   Bradley Boutcher and Christine Frandsen 2018
*/


class App extends Component {

  render() {
    
    // Bring in our proptypes
    const { dispatch, isAuthenticated, errorMessage, user, company, logError } = this.props

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
                user = {user}
                logError={logError}
            />
            
            { errorMessage &&  alert( errorMessage ) }
            
            <Route exact path="/" component={ Welcome } 
                render={ () => 
                <Welcome
                isAuthenticated = {isAuthenticated}
                />
                }
            />

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
                  company = { company }
                />
                : <Redirect to='/' />
              } />
              
              <Route 
              exact path ="/permit"
              render={()=>
                isAuthenticated === true // Redirect unauthenticated users to avoid permits being created
                ? <Permit 
                  isAuthenticated={ isAuthenticated }
                  user = { user }
                  dispatch = { dispatch }
                />
                : <Redirect to='/' />
              } />

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
  logError: PropTypes.bool,
}

// These props come from the application's
// state when it is started

function mapStateToProps(state) {

  const { auth } = state
  const { isAuthenticated, errorMessage, user, company, logError } = auth

  return {
    user,
    isAuthenticated,
    errorMessage,
    company,
    logError
  }
}

export default connect(mapStateToProps)(App);

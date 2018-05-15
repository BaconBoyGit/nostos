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
import Update from '../components/forms/ProfileUpdate';
import Admin from '../components/forms/AdminPermit';

import { fetchUser } from '../actions/actions';
import { fetchPermit } from '../actions/actions';
import { fetchUpdate } from '../actions/actions';

/*
  The App component is the main component mounted at the first loading of the page
  
  This handles the passing of props to all child components, as well as 
  establishing routes to other components
  Created by Bradley Boutcher and Christine Frandsen, 2018
*/


/*
  The App component is the main component mounted at the first loading of the page
  
  This handles the passing of props to all child components, as well as 
  establishing routes to other components

  Created by Bradley Boutcher and Christine Frandsen, 2018
*/

class App extends Component {

  render() {
    
    // Bring in our proptypes
    const { dispatch, isAuthenticated, errorMessage, user, permit, permitErrorMessage, logError, permError } = this.props

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
            
            <Route exact path="/" 
                render={ () => 
                <Welcome
                isAuthenticated = {isAuthenticated}
                user = {user}
                />
                }
            />

            <Route 
              exact path ="/admin"
              render={()=>
                isAuthenticated === true // Redirect unauthenticated users to avoid status access
                ? <Admin
                  isAuthenticated={ isAuthenticated }
                  user = { user }
                  permit = {permit}
                  dispatch = {dispatch}
                
                />
                : <Redirect to='/' />
              } />

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
                    permit = { permit }
                    dispatch = { dispatch }
                  />
                  : <Redirect to='/' />
                } 

            />

             <Route 
                exact path="/update" 
                render={()=>
                  isAuthenticated === true // Redirect unauthenticated users to avoid profile access
                  ? <Update
                    isAuthenticated={ isAuthenticated }
                    user = { user }
                    permit = { permit }
                    dispatch = { dispatch }
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
                  permit = {permit}
                  dispatch = {dispatch}
                
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
                  permit = { permit }
                  permError = { permError }
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
  permError: PropTypes.bool
}


// These props come from the application's
// state when it is started

function mapStateToProps(state) {

  const { auth, perm } = state
  const { isAuthenticated, errorMessage, user, logError } = auth
  const { permit, permitErrorMessage, permError } = perm
  
  return {
    user,
    isAuthenticated,
    errorMessage,
    permit,
    permitErrorMessage,
    logError,
    permError,    
  }
}

export default connect(mapStateToProps)(App);
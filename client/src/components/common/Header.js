import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import PropTypes from 'prop-types'; 

import { loginUser, logoutUser } from "../../actions/actions";
import Register from "../forms/Register";
import Logout from "../forms/Logout"
import Login from "../forms/Login"

var blogo = require("../images/logo.svg");
var bseal = require("../images/seal.svg");

//Will draw from database
var first = "Joe";
var last = "Smith";

/*
   The header component, present on all pages for the Nostos site
   Bradley Boutcher and Christine Frandsen 2018
*/

export default class Header extends Component {

    // We want to manually refresh the dom after updating our props
    refreshPage() {
        window.location.reload()
    }

    render() {
        const { dispatch, isAuthenticated, errorMessage } = this.props;

        // Move the logo slightly away from the wall
        const logoStyle = {
        marginLeft: "10px"
        };
      
        return (
            <div className="mn">
                <header className="h" role="banner">
                    <nav className="lo">
                        <Link to="/" className="lo-l">
                            <img
                            style={logoStyle}
                            src={blogo}
                            alt="City of Boston"
                            className="lo-i"
                            />
                            <span className="lo-t">Mayor Martin J. Walsh</span>
                        </Link>
                    </nav>

                    <div className="s">
                        <img src={bseal} alt="City of Boston" className="s-i" />
                    </div>

                    <nav className="nv-h">
                        { !isAuthenticated && // If not authenticated, display sign in form

                            <Login
                                errorMessage={errorMessage}
                                onLoginClick={ creds => dispatch(loginUser(creds)) }
                                style={{ marginLeft: "10px" }}
                            />
    
                        }
                        
                        {isAuthenticated && // If authenticated, only display the logout button
                        <nav className="nv-h-l">
                            <Link to="/profile"><div className ="nv-h-l-a"> {first} {last} </div></Link>
    
                            <Link to="/status" className="nv-h-l-a nv-h-l-a--k--s tr-link"> Status </Link>
                            <Link to="/permit" className="nv-h-l-a nv-h-l-a--k--s tr-link"> New Permit </Link>
                            <Link to = "/">
                            <Logout
                                onLogoutClick={() => dispatch(logoutUser())}
                            />
                            </Link>
                        </nav>
                        }

                    </nav>
                    
                </header>
            </div>
        );
    }
}

Header.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string
}
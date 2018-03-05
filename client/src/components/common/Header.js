import React from 'react';  
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom'

import LoginForm from '../forms/LoginForm';
import RegisterForm from '../forms/RegisterForm';

var blogo = require('../images/logo.svg');
var bseal = require('../images/seal.svg');

/*
   The header component, present on all pages for the Nostos site
   Bradley Boutcher 2018
*/

// Move the logo slightly away from the wall
const logoStyle = {
    marginLeft: "10px",
    }; 

const Header = () => {
    return (

        <div className="mn">
            <header className="h" >

                <nav className="lo">
                    <Link to="/" className="lo-l">
                        <img style = {logoStyle} src= { blogo } alt="City of Boston" className="lo-i" />
                        <span className="lo-t">Mayor Martin J. Walsh</span>
                    </Link>
                </nav>
               
                <div className="s">
                    <img src= { bseal }  alt="City of Boston" className="s-i" /> 
                </div>

                <nav className="nv-h">
                    <Link to="/register" >
                        <div className="btn btn--sm btn--y"> Sign Up </div>
                    </Link>
                    <Link to="/login">
                        <div className="btn btn--sm btn--y" style = {{marginLeft: "10px"}} > Sign In </div>
                    </Link>
                </nav>
                
            </header>
        </div>

    )
};

export default Header;
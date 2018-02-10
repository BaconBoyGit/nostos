import React from 'react';
import Home from './home.js';

var blight = require('../images/b-dark.svg');
var blogo = require('../images/logo.svg');
var bseal = require('../images/seal.svg');
var today = new Date();

class login extends React.Component {
    render () {
        return (
        <div className ="App">
           
       
        <div class="mn">
             <header class="h" >
                <div class="lo">
                 <h2><img src= { blogo } alt="City of Boston" class="lo-i" /></h2>
                </div>
                <div class="s">
                     <img src= { bseal }  alt="City of Boston" class="s-i" />
                </div>
            </header>
        </div>
        <form action="https://boston.gov" method="GET">
                    <div class="fs">
                    <div class="fs-c fs-c--i">
                        <div class  ="txt">
                        <div align="left">
                            <label for="text" class="txt-l">Email</label>
                        </div>
                            <input id="text" type="email" placeholder="Email Address" class="txt-f" />
                        </div>
                        </div>
                    <div class="fs-c fs-c--i">    
                        <div class="txt">
                        <div align="center">
                            <label for="text" class="txt-l">Password</label>
                        
                            <input id="text" type="password" placeholder="Password" class="txt-f" />
                         </div>
                         </div>
                   
                    </div>
                    <div class="bc bc--r">
                    <center>
                        <button type="submit" class="btn btn--700">Login</button>       
                    </center>
                    </div>
                </div>
            </form>  
            <form action="https://facebook.com" method="GET">
            <div class="bc bc--r">
                    <center>
                        <button type="submit" class="btn btn--700">Register</button>       
                    </center>
                    </div>
             </form>
              
        </div>
      
        )
    }
}

export default login;
 //Need properly create button for authentication and login purposes 
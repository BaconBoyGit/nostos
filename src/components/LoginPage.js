import React from 'react';
import Home from './home.js';
import './LoginPage.css';

var blight = require('../images/b-dark.svg');
var blogo = require('../images/logo.svg');
var bseal = require('../images/seal.svg');


//This class is designed to create the initial login page so people can either check the status of their permit or apply for a permit
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
        <center>            
        <div class="b b-- b--fw">
             <div class="b-c">
                <div class="sh ">
                     <h2 class="sh-title">Application for Moving Truck Permit</h2>
                </div>
            </div>
        </div>
        </center>
        <form action="https://boston.gov" method="GET">
                    <div class="fs">
                    <div class="fs-c fs-c--i">
                        <div class  ="txt">
                        <div align="center">
                            <label for="text" class="txt-l">Email</label>
                
                            <input type="email" placeholder="Email address" class="txt-f" /> 
                        </div>
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
            <form action="https://www.boston.gov/how-reserve-parking-spot-your-moving-truck" method="GET">  
            <div class="bc bc--r">
                    <center>
                        <button type="submit" class="btn btn--700">Apply</button>       
                    </center>
                    </div>
             </form>       
        </div>
      
        )
    }

    
}


export default login;

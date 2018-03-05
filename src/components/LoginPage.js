import React from 'react';
import Home from './home.js';
import './LoginPage.css';
import App from '../pages/App';

var blight = require('../images/b-dark.svg');
var blogo = require('../images/logo.svg');
var bseal = require('../images/seal.svg');


//This class is designed to create the initial login page so people can either check the status of their permit or apply for a permit


class login extends React.Component {
     

    render () {   

       var app1 = new App;
        
        return (      
 
        <div className ="login">   
        <center>            
        <div class="b b-- b--fw">
             <div class="b-c">
              
                     <h2 class="sh-title">Application for Moving Truck Permit</h2>
               
            </div>
        </div>
        </center>
        <form action="https://boston.gov" method="POST">
                    <div class="fs">
                    <div align="center">
                    <div class="txt g--6">
                        <label for="first_name" class="txt-l txt-l--mt000">Email Address</label>
                         <input id="first_name" type="text" placeholder="Email" class="txt-f" required/>
                     </div>
                     </div>
                     <div class="fs-c fs-c--i">    
                        <div class="txt">
                        <div align="center">
                            <label for="text" class="txt-l">Password</label>
                            <input id="text" type="password" placeholder="Password" class="txt-f" required />
                         </div>
                         </div>
                    </div>
                    </div>
                     </form>    
        </div>
        
   
        )
    
    }

    




    
}


export default login;

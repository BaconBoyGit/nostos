import React from 'react';

var blogo = require('../images/logo.svg');
var bseal = require('../images/seal.svg');

/*
*   The header component, present on all pages for the Nostos site
*   Uses patterns.boston.gov patterns
*   Bradley Boutcher 2018
*/

class header extends React.Component {
    
    render () {

        // Move the logo slightlty away from the wall
        const logoStyle = {
            marginLeft: "10px",
          }; 

        return (

            <div className="mn">
                <header className="h" >

                    <div class="lo">
                        <a class="lo-l">
                            <img style = {logoStyle} src= { blogo } alt="City of Boston" class="lo-i" />
                            <span class="lo-t">Mayor Martin J. Walsh</span>
                        </a>
                    </div>
                   
                    <div className="s">
                        <img src= { bseal }  alt="City of Boston" class="s-i" /> 
                    </div>
                    
                </header>
            </div>
 
        )
    }
}

export default header;
import React from 'react';

var blogo = require('../images/logo.svg');
var bseal = require('../images/seal.svg');

/*
*   The header component, present on all pages for the Nostos site
*   Uses patterns.boston.gov modules
*   Bradley Boutcher 2018
*/

class header extends React.Component {
    render () {
        const logoStyle = {
            marginLeft: "10px",
          }; 

        return (
        <header className ="Header">

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
        </header>
 
        )
    }
}

export default header;
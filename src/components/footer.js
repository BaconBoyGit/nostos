import React from 'react';

var blight = require('../images/b-dark.svg');
var blogo = require('../images/logo.svg');
var bseal = require('../images/seal.svg');

/*
*   The header component, present on all pages for the Nostos site
*   Uses patterns.boston.gov modules
*   Bradley Boutcher 2018
*/

class footer extends React.Component {
    render () {
        const logoStyle = {
            marginLeft: "10px",
          }; 

        return (
        <div className ="App">

            <div className="mn">

                <header className="h" >
                
                    <div class="lo">
                            <h2><img style = {logoStyle} src= { blogo } alt="City of Boston" class="lo-i" /></h2>
                    </div>
                    
                    <div className="s">
                        <img src= { bseal }  alt="City of Boston" class="s-i" />
                    </div>
                    
                </header>
            </div>
        </div>
      
        )
    }
}

export default footer;
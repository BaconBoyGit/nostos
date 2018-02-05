import React from 'react';

var blight = require('../images/b-dark.svg');
var blogo = require('../images/logo.svg');
var bseal = require('../images/seal.svg');

class home extends React.Component {
    render () {
        return (
        <div className ="App">

        <div class="mn">

            <header class="h" >

                <div class="lo">
                        <img src= { blogo } alt="City of Boston" class="lo-i" />
                </div>
                
                <div class="s">
                    <img src= { bseal }  alt="City of Boston" class="s-i" />
                </div>
               
            </header>
        </div>
      </div>
        )
    }
}

export default home;
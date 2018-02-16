import React from 'react';
var car = require('../images/nostos-car.svg');

/*
*   The body of the home page,
*   introducing users to the site
*   Uses patterns.boston.gov modules
*   Bradley Boutcher 2018
*/

class homeBody extends React.Component {
    render () {
        const carStyle = {
            maxHeight: 200,
            position: 'absolute',
            top: 0,
            bottom: 0,
        }


        return (
            <div className = "homeBody">
                    <img src={ car }  alt="car" style={ carStyle } />
            </div>
        );
    }
}

export default homeBody;
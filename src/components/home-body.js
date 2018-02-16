import React from 'react';
var car = require('../images/nostos-car.svg');

/*
*   The body of the home page, used to provide steps for the user to 
*   navigate the site and create their pemit
*   Uses patterns.boston.gov modules
*   Bradley Boutcher 2018
*/
var bgColors = { "Default": "#81b71a",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
};

class homeBody extends React.Component {
    render () {
        const form = {
            background: bgColors.Blue
        }


        return (
            <homeBody className = "homeBody">
                <div class="g--4 m-b500 br br-a150">
                    <div class="p-a300 ta--c t--upper t--cb t--sans">car</div>
                    <img src={ car }  alt="car" style={{maxHeight: 200}} />
                    <div class="p-a300 t--sans"><a href="https://patterns.boston.gov/images/global/icons/experiential/car.svg">File URL</a></div>
                </div>
            </homeBody>
        );
    }
}

export default homeBody;
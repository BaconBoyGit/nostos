import React from 'react';

/*
*   The body of the home page,
*   introducing users to the site
*   Uses patterns.boston.gov modules
*   Bradley Boutcher 2018
*/

class homeBody extends React.Component {
    render () {

        // Match the height of the mapbox container
        const homeBodyStyle = {
            height: 400,
            padding: 25,
        }

        // Center the content of the home body
        const homeContent = {
            textAlign: 'center',
            position: 'relative',
        }

        return (
            <div className = "homeBody" style = {homeBodyStyle} >
                <div style= { homeContent }>
                            <div class="hro-c">
                                <div class="hro-i hro-i--l">welcome to the City of Boston</div>
                                <h1 class="hro-t hro-t--l">Moving Permit Portal</h1>
                                <a href="#" class="btn btn--700">Get Started</a>
                            </div>
                </div>
            </div>
        );
    }
}

export default homeBody;
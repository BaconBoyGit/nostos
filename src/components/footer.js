import React from 'react';

/*
*   The footer component, present on all pages for the Nostos site
*   Uses patterns.boston.gov modules
*   Bradley Boutcher 2018
*/

class footer extends React.Component {
    render () {

        // We use 'relative' to render this below other elements
        const footerStyle = {
            position: "relative",
            top: 0,
          }; 

        return (
        <div className ="Footer" style = { footerStyle }>
            <div className = "p.a400">
                footer placeholder text
            </div>
        </div>
      
        )
    }
}

export default footer;
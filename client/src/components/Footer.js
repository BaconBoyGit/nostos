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
          }; 

        return (
            <footer className = "ft" >
                <div class="ft-c">
                    <ul class="ft-ll">
                        <li class="ft-ll-i"><a href="https://www.boston.gov/copyright/privacyandsecurity.asp" class="ft-ll-a">Privacy Policy</a></li>
                    </ul>
                </div>
            </footer>
      
        )
    }
}

export default footer;
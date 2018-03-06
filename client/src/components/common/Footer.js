import React from 'react';

/*
  The footer component, present on all pages for the Nostos site
   Bradley Boutcher 2018
*/

// We use 'relative' to render this below other elements
const footerStyle = {
    position: "relative",
}; 

/*
We used a Stateless functional component (hence the arrow function) above. 
We use them for components that render only static content to a webpage as opposed to 
components that render stateful/changing content.
*/

const Footer = () => {
    return (
        <footer className = "ft" >
            <div className="ft-c">
                <ul className="ft-ll">
                    <li className="ft-ll-i"><a href="https://www.boston.gov/copyright/privacyandsecurity.asp" className="ft-ll-a">Privacy Policy</a></li>
                </ul>
            </div>
        </footer>
  
    )
}

export default Footer;

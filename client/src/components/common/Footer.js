import React from 'react';

/*
  The footer component, present on all pages for the Nostos site
   Bradley Boutcher and Christine Frandsen 2018
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
                <ul className="ft-ll">
                    <li className="ft-ll-i"><a href="https://www.boston.gov/departments/mayors-office/contact-boston-city-hall" className="ft-ll-a">Contact Us</a></li>
                </ul>
                <ul className="ft-ll">
                    <li className="ft-ll-i"><a href="https://www.boston.gov/departments/digital-team/city-boston-alerts-and-notifications" className="ft-ll-a">Alerts and Notifications</a></li>
                </ul>
                <ul className="ft-ll">
                    <li className="ft-ll-i"><a href="https://www.boston.gov/departments/public-records" className="ft-ll-a">Public records requests</a></li>
                </ul>
            </div>
        </footer>
  
    )
}

export default Footer;

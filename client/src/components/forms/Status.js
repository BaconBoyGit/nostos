import React from 'react';
import nl2br from 'react-newline-to-break';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

/*
   The status component
   loaded for authenticated users, containing their information
   boston.gov stylings to introduce the user to the site
   
   Bradley Boutcher & Christine Frandsen 2018
*/

class Status extends React.Component {

  // Set default map attributes on construction
    constructor(props){
        super(props)
        // Set the default location of focus for the map
        this.state = {
        }
    }
  
    // Render inline style attributes
    render() {

      //Currently static, will connect to database to be dynamic later
      var userName = "Joe Smith";  
      var appNumber = ["1", "2", "3"];
      var status = ["Accepted", "Pending", "Denied"];
      var disStatus = '';
      var i;
      var address = ["1144 Aztec Road", "255 Grapevine Road", "1225 Santa Claus Lane"];


      // container for our profile element
      const profileContainer = {
        marginTop: '1%',
        position: 'relative',
        height: '400px',
        marginBottom: '5%'
      };

      // Center the content of the home body within its container
      const profileContent = {
          textAlign: 'center',
          position: 'relative',
      }
      
      var test = <tbody><tr> <td data-label='Date Applied For'> {appNumber[0]} </td> 
      <td data-label='Address'>  {address[0]}  </td> 
       <td data-label='Date Applied'> {status[0]}  </td> 
       </tr>
       <tr> <td data-label='Date Applied'> {appNumber[1]} </td> 
       <td data-label='Address'>  {address[1]}  </td> 
        <td data-label='Date Applied'> {status[1]}  </td> 
        </tr>
        <tr> <td data-label='Date Applied'> {appNumber[2]} </td> 
        <td data-label='Address'>  {address[2]}  </td> 
         <td data-label='Date Applied'> {status[2]}  </td> 
         </tr></tbody>

        for (i = 0; i < appNumber.length; i++)
        {
            disStatus +=<tr> <td data-label='Date Applied'> {appNumber[i]} </td> 
            <td data-label='Address'>  {address[i]}  </td> 
             <td data-label='Date Applied'> {status[i]}  </td> 
             </tr>;
        }
       
      return (
          <div className = 'profileContainer' style = { profileContainer }>              
                <div className = "profileContent" style = {profileContent} >
                    <div class="b">
                        <div class="b-c">
                            <div class="h2 tt-u ta-c p-h300">{userName}'s Application Status</div>
                            <hr class="hr hr--sq m-h300 m-v500" />
                          
    <table border="1" cellpadding="1" cellspacing="1" class="responsive-table responsive-table--horizontal">
    <thead>
        <tr>
            <th>Date Applied For</th>
            <th>Address</th>
            <th>Status</th>
        </tr>
            </thead>
  
                {test}
    
            </table>
            </div>
                        </div>
                    </div>
                </div>
    
          
      )

    }
  }
  
export default Status
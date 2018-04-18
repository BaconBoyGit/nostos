import React from 'react';

/*
   The status component
   loaded for authenticated users, containing permit status
   boston.gov stylings to introduce the user to the site
   
   Bradley Boutcher & Christine Frandsen 2018
*/

class Status extends React.Component {
  
    // Render inline style attributes
    render() {

        const { isAuthenticated, user, company } = this.props

        //Currently static, will connect to database to be dynamic later
       
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
      
        // A table for displaying application data
        var test = 
            <tbody><tr> <td data-label='Date Applied For'> {appNumber[0]} </td> 
                <td data-label='Address'>  {address[0]}  </td> 
                    <td data-label='Date Applied'> {status[0]}  </td> 
                </tr>
                <tr> 
                    <td data-label='Date Applied'> {/*user.company.date*/} </td> 
                    <td data-label='Address'>  {address[1]}  </td> 
                    <td data-label='Date Applied'> {status[1]}  </td> 
                </tr>
                <tr> 
                    <td data-label='Date Applied'> {appNumber[2]} </td> 
                    <td data-label='Address'>  {address[2]}  </td> 
                    <td data-label='Date Applied'> {status[2]}  </td> 
                </tr>
            </tbody>

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
                            <div class="h2 tt-u ta-c p-h300">{user.first} {user.last}'s Application Status</div>
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
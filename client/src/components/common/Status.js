import React from 'react';
import PropTypes from 'prop-types'; 
import nl2br from 'react-newline-to-break';


/*
   The status component
   loaded for authenticated users, containing permit status
   boston.gov stylings to introduce the user to the site
   
   Bradley Boutcher & Christine Frandsen 2018
*/

class Status extends React.Component {
  
    // Render inline style attributes

    render() {

        const { user, permit } = this.props

        var test = permit;
        var disStatus = ''

        // container for our profile element
        const statusContainer = {
            marginTop: '1%',
            position: 'relative',
            height: '400px',
            marginBottom: '5%'
        };

        // Center the content of the home body within its container
        const statusContent = {
            textAlign: 'center',
            position: 'relative',
        }
      
        // A table for displaying application data
        var x = ""

        if(permit)
        {
            if(permit.companies)
            {
                     
                    for (var i = 0; i < permit.companies.length; i++)
                    {   
                        var m = i+1;
                        if(permit.companies[i].isPending)
                        disStatus += "Application " + m + ": " + permit.companies[i]. location +", Status: Pending" + "\n";
                        else if(permit.companies[i].isApproved)
                        disStatus += "Application " + m + ": " + permit.companies[i]. location +", Status: Approved" + "\n";
                        else
                        disStatus += "Application " + m + ": " + permit.companies[i]. location +", Status: Denied" + "\n";
                        
                    }
            }
        }

        var test = 
        
        
            <tbody>
                
                <tr> 
                
                <td data-label='Date Applied For'> 
                {permit && permit.companies && permit.companies[0].date} </td> 
                
                <td data-label='Address'>  {permit && permit.companies && permit.companies[0].location}  </td> 
                </tr>
                <tr> 
                    <td data-label='Date Applied'> {permit && permit.companies && permit.companies[1].date} </td> 
                    <td data-label='Address'>  {permit && permit.companies && permit.companies[1].location}  </td> 
                </tr>
                <tr> 
                    <td data-label='Date Applied'> {permit && permit.companies && permit.companies[2].date} </td> 
                    <td data-label='Address'>  {permit && permit.companies && permit.companies[2].location}  </td> 
                </tr>
                
            </tbody>
       
      return (
          <div className = 'statusContainer' style = { statusContainer }>              
                <div className = "statusContent" style = {statusContent} >
                    <div class="b">
                        <div class="b-c">
                            <div class="h2 tt-u ta-c p-h300">{user.first} {user.last}'s Application Status</div>
                            <hr class="hr hr--sq m-h300 m-v500" />
                          
                          {/*  <table border="1" cellPadding="1" cellSpacing="1" class="responsive-table responsive-table--horizontal">
                                <thead>
                                    <tr>
                                        <th>Date Applied For</th>
                                        <th>Start Time</th>
                                        <th>End Time</th>
                                        <th>Address</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <td data-label='Address'>Hello</td>
                                <td data-label='Address'>Howdy</td>
                                </tbody>
                                </table>*/}

                                    <div class="t--intro">
                                    <div>
                                        {nl2br(disStatus)}
                                      </div>
                                    </div>
                        </div>
                    </div>
                </div> 
            </div>   

       
        ) 
    }
    
}

Status.propTypes = {
    permit : PropTypes.object
}

export default Status
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
        var result = ''

        // container for our profile element
        const statusContainer = {
            marginTop: '1%',
            position: 'relative',
            height: '400px',
            marginBottom: '15%'
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

      /*  var test = 
            <tbody>
                
                <tr> 
                
                <td data-label='Date Applied'> {permit && permit.companies && permit.companies[0].date} </td> 
                <td data-label='Start Time'>  {permit && permit.companies && permit.companies[0].start} </td>
                <td data-label='End Time'> {permit && permit.companies && permit.companies[0].end} </td>
                <td data-label='Address'> {permit && permit.companies && permit.companies[0].location}</td>
                {permit && permit.companies && permit.companies[0].isPending==1 &&
                <td data-label='Status'> {permit && permit.companies && 'Pending'}</td>
                }
                {permit && permit.companies && permit.companies[0].isApproved==1 &&
                <td data-label='Status'> {permit && permit.companies && 'Approved'}</td>
                }
                {permit && permit.companies && permit.companies[0].isDenied==1 &&
                <td data-label='Status'> {permit && permit.companies && 'Denied'}</td>
                }

                </tr>
                <tr> 
                <td data-label='Date Applied'> {permit && permit.companies && permit.companies[1].date} </td> 
                <td data-label='Start Time'>  {permit && permit.companies && permit.companies[1].start} </td>
                <td data-label='End Time'> {permit && permit.companies && permit.companies[1].end} </td>
                <td data-label='Address'> {permit && permit.companies && permit.companies[1].location}</td>
                {permit && permit.companies && permit.companies[1].isPending==1 &&
                <td data-label='Status'> {permit && permit.companies && 'Pending'}</td>
                }
                {permit && permit.companies && permit.companies[1].isApproved==1 &&
                <td data-label='Status'> {permit && permit.companies && 'Approved'}</td>
                }
                {permit && permit.companies && permit.companies[1].isDenied==1 &&
                <td data-label='Status'> {permit && permit.companies && 'Denied'}</td>
                }
                </tr>
                <tr> 
                <td data-label='Date Applied'> {permit && permit.companies && permit.companies[2].date} </td> 
                <td data-label='Start Time'>  {permit && permit.companies && permit.companies[2].start} </td>
                <td data-label='End Time'> {permit && permit.companies && permit.companies[2].end} </td>
                <td data-label='Address'> {permit && permit.companies && permit.companies[2].location}</td>
                {permit && permit.companies && permit.companies[2].isPending==1 &&
                <td data-label='Status'> {permit && permit.companies && 'Pending'}</td>
                }
                {permit && permit.companies && permit.companies[2].isApproved==1 &&
                <td data-label='Status'> {permit && permit.companies && 'Approved'}</td>
                }
                {permit && permit.companies && permit.companies[2].isDenied==1 &&
                <td data-label='Status'> {permit && permit.companies && 'Denied'}</td>
                }
                </tr>
                
            </tbody> */

            var testPermit = ""
            if(permit)
            {
                if(permit.companies)
                {
                    

                    
                    for(var i = 0; i<permit.companies.length; i++)
                    {
                        testPermit +=
                        <tr> 
                        <td data-label='Date Applied'> {permit && permit.companies && permit.companies[i].date} </td> 
                        <td data-label='Start Time'>  {permit && permit.companies && permit.companies[i].start} </td>
                        <td data-label='End Time'> {permit && permit.companies && permit.companies[i].end} </td>
                        <td data-label='Address'> {permit && permit.companies && permit.companies[i].location}</td>
                        {permit && permit.companies && permit.companies[i].isPending==1 &&
                        <td data-label='Status'> {permit && permit.companies && 'Pending'}</td>
                        }
                        {permit && permit.companies && permit.companies[i].isApproved==1 &&
                        <td data-label='Status'> {permit && permit.companies && 'Approved'}</td>
                        }
                        {permit && permit.companies && permit.companies[i].isDenied==1 &&
                        <td data-label='Status'> {permit && permit.companies && 'Denied'}</td>
                        }
                        </tr>
                        console.log(testPermit)
                      
                    }

                }
            }
            
       
      return (
          <div className = 'statusContainer' style = { statusContainer }>              
                <div className = "statusContent" style = {statusContent} >
                    <div class="b">
                        <div class="b-c">
                            <div class="h2 tt-u ta-c p-h300">{user.first} {user.last}'s Application Status</div>
                            <hr class="hr hr--sq m-h300 m-v500" />
                          
                         {permit && permit.companies && permit.companies.length==0 &&
                         <div class="t--intro">
                            No permits to display 
                        </div>
                         } 
                          

                        {permit && permit.companies && permit.companies.length>0 &&
                         <div  style = { statusContainer }>
                           <table border="1" cellPadding="1" cellSpacing="1" class="responsive-table responsive-table--horizontal">
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
                                { permit.companies[0] &&
                                  <tr> 
                                        <td data-label='Date Applied'> {permit.companies[0].date} </td> 
                                        <td data-label='Start Time'>  {permit.companies[0].start} </td>
                                        <td data-label='End Time'> {permit.companies[0].end} </td>
                                        <td data-label='Address'> {permit.companies[0].location}</td>
                                 
                                        {permit.companies[0].isPending==1 &&
                                        <td data-label='Status'> Pending</td>
                                        }
                                        
                                        {permit.companies[0].isApproved==1 &&
                                        <td data-label='Status'> {permit && permit.companies && 'Approved'}</td>
                                        }
                                        
                                        {permit.companies[0].isDenied==1 &&
                                        <td data-label='Status'> {permit && permit.companies && 'Denied'}</td>
                                        }
                                  </tr>
                                }
                                {permit.companies[1] &&
                                  <tr> 
                                        <td data-label='Date Applied'> {permit.companies[1].date} </td> 
                                        <td data-label='Start Time'>  {permit.companies[1].start} </td>
                                        <td data-label='End Time'> {permit.companies[1].end} </td>
                                        <td data-label='Address'> {permit.companies[1].location}</td>
                                 
                                        {permit.companies[1].isPending==1 &&
                                        <td data-label='Status'> Pending</td>
                                        }
                                        
                                        {permit.companies[1].isApproved==1 &&
                                        <td data-label='Status'> {permit && permit.companies && 'Approved'}</td>
                                        }
                                        
                                        {permit.companies[1].isDenied==1 &&
                                        <td data-label='Status'> {permit && permit.companies && 'Denied'}</td>
                                        }
                                  </tr>
                                }
                                {permit.companies[2] &&
                                  <tr> 
                                        <td data-label='Date Applied'> {permit.companies[2].date} </td> 
                                        <td data-label='Start Time'>  {permit.companies[2].start} </td>
                                        <td data-label='End Time'> {permit.companies[2].end} </td>
                                        <td data-label='Address'> {permit.companies[2].location}</td>
                                 
                                        {permit.companies[2].isPending==1 &&
                                        <td data-label='Status'> Pending</td>
                                        }
                                        
                                        {permit.companies[2].isApproved==1 &&
                                        <td data-label='Status'> {permit && permit.companies && 'Approved'}</td>
                                        }
                                        
                                        {permit.companies[2].isDenied==1 &&
                                        <td data-label='Status'> {permit && permit.companies && 'Denied'}</td>
                                        }
                                  </tr>
                                }
                                {permit.companies[3] &&
                                  <tr> 
                                        <td data-label='Date Applied'> {permit.companies[3].date} </td> 
                                        <td data-label='Start Time'>  {permit.companies[3].start} </td>
                                        <td data-label='End Time'> {permit.companies[3].end} </td>
                                        <td data-label='Address'> {permit.companies[3].location}</td>
                                 
                                        {permit.companies[3].isPending==1 &&
                                        <td data-label='Status'> Pending</td>
                                        }
                                        
                                        {permit.companies[3].isApproved==1 &&
                                        <td data-label='Status'> {permit && permit.companies && 'Approved'}</td>
                                        }
                                        
                                        {permit.companies[0].isDenied==1 &&
                                        <td data-label='Status'> {permit && permit.companies && 'Denied'}</td>
                                        }
                                  </tr>
                                }
                                {permit.companies[4] &&
                                  <tr> 
                                        <td data-label='Date Applied'> {permit.companies[4].date} </td> 
                                        <td data-label='Start Time'>  {permit.companies[4].start} </td>
                                        <td data-label='End Time'> {permit.companies[4].end} </td>
                                        <td data-label='Address'> {permit.companies[4].location}</td>
                                 
                                        {permit.companies[4].isPending==1 &&
                                        <td data-label='Status'> Pending</td>
                                        }
                                        
                                        {permit.companies[4].isApproved==1 &&
                                        <td data-label='Status'> {permit && permit.companies && 'Approved'}</td>
                                        }
                                        
                                        {permit.companies[4].isDenied==1 &&
                                        <td data-label='Status'> {permit && permit.companies && 'Denied'}</td>
                                        }
                                  </tr>
                                }
                                {permit.companies[5] &&
                                  <tr> 
                                        <td data-label='Date Applied'> {permit.companies[5].date} </td> 
                                        <td data-label='Start Time'>  {permit.companies[5].start} </td>
                                        <td data-label='End Time'> {permit.companies[5].end} </td>
                                        <td data-label='Address'> {permit.companies[5].location}</td>
                                 
                                        {permit.companies[5].isPending==1 &&
                                        <td data-label='Status'> Pending</td>
                                        }
                                        
                                        {permit.companies[5].isApproved==1 &&
                                        <td data-label='Status'> {permit && permit.companies && 'Approved'}</td>
                                        }
                                        
                                        {permit.companies[5].isDenied==1 &&
                                        <td data-label='Status'> {permit && permit.companies && 'Denied'}</td>
                                        }
                                  </tr>
                                }
                                {permit.companies[6] &&
                                  <tr> 
                                        <td data-label='Date Applied'> {permit.companies[6].date} </td> 
                                        <td data-label='Start Time'>  {permit.companies[6].start} </td>
                                        <td data-label='End Time'> {permit.companies[6].end} </td>
                                        <td data-label='Address'> {permit.companies[6].location}</td>
                                 
                                        {permit.companies[6].isPending==1 &&
                                        <td data-label='Status'> Pending</td>
                                        }
                                        
                                        {permit.companies[6].isApproved==1 &&
                                        <td data-label='Status'> {permit && permit.companies && 'Approved'}</td>
                                        }
                                        
                                        {permit.companies[6].isDenied==1 &&
                                        <td data-label='Status'> {permit && permit.companies && 'Denied'}</td>
                                        }
                                  </tr>
                                }
                                {permit.companies[7] &&
                                  <tr> 
                                        <td data-label='Date Applied'> {permit.companies[7].date} </td> 
                                        <td data-label='Start Time'>  {permit.companies[7].start} </td>
                                        <td data-label='End Time'> {permit.companies[7].end} </td>
                                        <td data-label='Address'> {permit.companies[7].location}</td>
                                 
                                        {permit.companies[7].isPending==1 &&
                                        <td data-label='Status'> Pending</td>
                                        }
                                        
                                        {permit.companies[7].isApproved==1 &&
                                        <td data-label='Status'> {permit && permit.companies && 'Approved'}</td>
                                        }
                                        
                                        {permit.companies[7].isDenied==1 &&
                                        <td data-label='Status'> {permit && permit.companies && 'Denied'}</td>
                                        }
                                  </tr>
                                }
                                {permit.companies[8] &&
                                  <tr> 
                                        <td data-label='Date Applied'> {permit.companies[8].date} </td> 
                                        <td data-label='Start Time'>  {permit.companies[8].start} </td>
                                        <td data-label='End Time'> {permit.companies[8].end} </td>
                                        <td data-label='Address'> {permit.companies[8].location}</td>
                                 
                                        {permit.companies[8].isPending==1 &&
                                        <td data-label='Status'> Pending</td>
                                        }
                                        
                                        {permit.companies[8].isApproved==1 &&
                                        <td data-label='Status'> {permit && permit.companies && 'Approved'}</td>
                                        }
                                        
                                        {permit.companies[8].isDenied==1 &&
                                        <td data-label='Status'> {permit && permit.companies && 'Denied'}</td>
                                        }
                                  </tr>
                                }
                                {permit.companies[9] &&
                                  <tr> 
                                        <td data-label='Date Applied'> {permit.companies[9].date} </td> 
                                        <td data-label='Start Time'>  {permit.companies[9].start} </td>
                                        <td data-label='End Time'> {permit.companies[9].end} </td>
                                        <td data-label='Address'> {permit.companies[9].location}</td>
                                 
                                        {permit.companies[9].isPending==1 &&
                                        <td data-label='Status'> Pending</td>
                                        }
                                        
                                        {permit.companies[9].isApproved==1 &&
                                        <td data-label='Status'> {permit && permit.companies && 'Approved'}</td>
                                        }
                                        
                                        {permit.companies[9].isDenied==1 &&
                                        <td data-label='Status'> {permit && permit.companies && 'Denied'}</td>
                                        }
                                  </tr>
                                }
                                </tbody>
                                
                                </table>
                                </div>
                            }

                                    <div class="t--intro">
                                        {/*nl2br(disStatus)*/}
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
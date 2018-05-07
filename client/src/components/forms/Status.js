import React from 'react';
import PropTypes from 'prop-types'; 
import nl2br from 'react-newline-to-break';
import { fetchPermit } from "../../actions/actions";


/*
   The status component
   loaded for authenticated users, containing permit status
   boston.gov stylings to introduce the user to the site
   
   Bradley Boutcher & Christine Frandsen 2018
*/

class Status extends React.Component {
  
    // Render inline style attributes
    componentWillMount() {
        const { isAuthenticated, dispatch } = this.props
        if(isAuthenticated){
        dispatch(fetchPermit())
        }
      }

    render() {

        const { user, permit } = this.props

        var test = permit;
        var disStatus = ''
        var result = ''
        var startArray = new Array(10)
        var endArray = new Array(10)

        if(permit){
            if(permit.companies){   
                for(var j = 0; j<10; j++)
                {
                    if(permit.companies[j]){
                        if(permit.companies[j].start==='800')
                        {
                            startArray[j]="8:00 AM"
                        }else if(permit.companies[j].start==='830')
                        {
                            startArray[j]="8:30 AM"
                        }else if(permit.companies[j].start==='900')
                        {
                            startArray[j]="9:00 AM"
                        }else if(permit.companies[j].start==='930')
                        {
                            startArray[j]="9:30 AM"
                        }else if(permit.companies[j].start==='1000')
                        {
                            startArray[j]="10:00 AM"
                        }else if(permit.companies[j].start==='1030')
                        {
                            startArray[j]="10:30 AM"
                        }else if(permit.companies[j].start==='1100')
                        {
                            startArray[j]="11:00 AM"
                        }else if(permit.companies[j].start==='1130')
                        {
                            startArray[j]="11:30 AM"
                        }else if(permit.companies[j].start==='1200')
                        {
                            startArray[j]="12:00 PM"
                        }else if(permit.companies[j].start==='1230')
                        {
                            startArray[j]="12:30 PM"
                        }else if(permit.companies[j].start==='1300')
                        {
                            startArray[j]="1:00 PM"
                        }else if(permit.companies[j].start==='1330')
                        {
                            startArray[j]="1:30 PM"
                        }else if(permit.companies[j].start==='1400')
                        {
                            startArray[j]="2:00 PM"
                        }else if(permit.companies[j].start==='1430')
                        {
                            startArray[j]="2:30 PM"
                        }else if(permit.companies[j].start==='1500')
                        {
                            startArray[j]="3:00 PM"
                        }else if(permit.companies[j].start==='1530')
                        {
                            startArray[j]="3:30 PM"
                        }else if(permit.companies[j].start==='1600')
                        {
                            startArray[j]="4:00 PM"
                        }else if(permit.companies[j].start==='1630')
                        {
                            startArray[j]="4:30 PM"
                        }else if(permit.companies[j].start==='1700')
                        {
                            startArray[j]="5:00 PM"
                        }else if(permit.companies[j].start==='1730')
                        {
                            startArray[j]="5:30 PM"
                        }
                        if(permit.companies[j].end==='1800')
                        {
                            endArray[j]="6:00 PM"
                        }else if(permit.companies[j].end==='830')
                        {
                            endArray[j]="8:30 AM"
                        }else if(permit.companies[j].end==='900')
                        {
                            endArray[j]="9:00 AM"
                        }else if(permit.companies[j].end==='930')
                        {
                            endArray[j]="9:30 AM"
                        }else if(permit.companies[j].end==='1000')
                        {
                            endArray[j]="10:00 AM"
                        }else if(permit.companies[j].end==='1030')
                        {
                            endArray[j]="10:30 AM"
                        }else if(permit.companies[j].end==='1100')
                        {
                            endArray[j]="11:00 AM"
                        }else if(permit.companies[j].start==='1130')
                        {
                            startArray[j]="11:30 AM"
                        }else if(permit.companies[j].end==='1200')
                        {
                            endArray[j]="12:00 PM"
                        }else if(permit.companies[j].end==='1230')
                        {
                            endArray[j]="12:30 PM"
                        }else if(permit.companies[j].end==='1300')
                        {
                            endArray[j]="1:00 PM"
                        }else if(permit.companies[j].end==='1330')
                        {
                            endArray[j]="1:30 PM"
                        }else if(permit.companies[j].end==='1400')
                        {
                            endArray[j]="2:00 PM"
                        }else if(permit.companies[j].end==='1430')
                        {
                            endArray[j]="2:30 PM"
                        }else if(permit.companies[j].end==='1500')
                        {
                            endArray[j]="3:00 PM"
                        }else if(permit.companies[j].end==='1530')
                        {
                            endArray[j]="3:30 PM"
                        }else if(permit.companies[j].end==='1600')
                        {
                            endArray[j]="4:00 PM"
                        }else if(permit.companies[j].end==='1630')
                        {
                            endArray[j]="4:30 PM"
                        }else if(permit.companies[j].end==='1700')
                        {
                            endArray[j]="5:00 PM"
                        }else if(permit.companies[j].end==='1730')
                        {
                            endArray[j]="5:30 PM"
                        }
                    }

                }
             }
         }

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


           
    
    var permits = ''
    if(permit && permit.companies)
      {
      permits = <tbody>
      { permit.companies[0] &&
        <tr> 
              <td data-label='Date Applied'> {permit.companies[0].date} </td> 
              <td data-label='Start Time'>  {startArray[0]} </td>
              <td data-label='End Time'> {endArray[0]} </td>
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
              <td data-label='Start Time'>  {startArray[1]} </td>
              <td data-label='End Time'> {endArray[1]} </td>
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
              <td data-label='Start Time'>  {startArray[2]} </td>
              <td data-label='End Time'> {endArray[2]} </td>
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
              <td data-label='Start Time'>  {startArray[3]} </td>
              <td data-label='End Time'> {endArray[3]} </td>
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
              <td data-label='Start Time'>  {startArray[4]} </td>
              <td data-label='End Time'> {endArray[4]} </td>
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
              <td data-label='Start Time'>  {startArray[5]} </td>
              <td data-label='End Time'> {endArray[5]} </td>
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
              <td data-label='Start Time'>  {startArray[6]} </td>
              <td data-label='End Time'> {endArray[6]} </td>
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
              <td data-label='Start Time'>  {startArray[7]} </td>
              <td data-label='End Time'> {endArray[7]} </td>
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
              <td data-label='Start Time'>  {startArray[8]} </td>
              <td data-label='End Time'> {endArray[8]} </td>
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
              <td data-label='Start Time'>  {startArray[9]} </td>
              <td data-label='End Time'> {endArray[9]} </td>
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
                                
                                {permits}
                                
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
    permit : PropTypes.object,
    dispatch: PropTypes.func.isRequired,
}

export default Status
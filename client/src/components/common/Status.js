import React from 'react';
import PropTypes from 'prop-types'; 
import { fetchCompany } from '../../actions/actions';

/*
   The status component
   loaded for authenticated users, containing permit status
   boston.gov stylings to introduce the user to the site
   
   Bradley Boutcher & Christine Frandsen 2018
*/

class Status extends React.Component {
  
   /* componentWillMount() {
        const { fetchCompany } = this.props
        fetchCompany()
    }*/
    // Render inline style attributes
    


    render() {

        const { isAuthenticated, user, permit } = this.props
        //Currently static, will connect to database to be dynamic later
       
        var appNumber = ["1", "2", "3"];
        var status = ["Accepted", "Pending", "Denied"];
        var disStatus = '';
        var i;
        var address = ["1144 Aztec Road", "255 Grapevine Road", "1225 Santa Claus Lane"];
        var test = permit;

        if (permit)
            if (permit.companies)
                console.log(permit.companies.length)

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
                for(i = 0; i<permit.companies.length; i++)
                {
                     x+= permit.companies[i].location
                   // console.log(x)
                }
            }
        }


        var test = 
        
        
            <tbody>
                
                <tr> 
                
                <td data-label='Date Applied For'> 
                {permit && permit.companies && permit.companies[0].date} </td> 
                
                <td data-label='Address'>  {permit && permit.companies && permit.companies[0].location}  </td> 
                    <td data-label='Date Applied'> {status[0]}  </td> 
                </tr>
                <tr> 
                    <td data-label='Date Applied'> {permit && permit.companies && permit.companies[1].date} </td> 
                    <td data-label='Address'>  {permit && permit.companies && permit.companies[1].location}  </td> 
                    <td data-label='Date Applied'> {status[1]}  </td> 
                </tr>
                <tr> 
                    <td data-label='Date Applied'> {permit && permit.companies && permit.companies[2].date} </td> 
                    <td data-label='Address'>  {permit && permit.companies && permit.companies[2].location}  </td> 
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
          <div className = 'statusContainer' style = { statusContainer }>              
                <div className = "statusContent" style = {statusContent} >
                    <div class="b">
                        <div class="b-c">
                            <div class="h2 tt-u ta-c p-h300">{user.first} {user.last}'s Application Status</div>
                            <hr class="hr hr--sq m-h300 m-v500" />
                          
                            <table border="1" cellPadding="1" cellSpacing="1" class="responsive-table responsive-table--horizontal">
                                <thead>
                                    <tr>
                                        <th>Date Applied For</th>
                                        <th>Address</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <td data-label='Address'>{x}</td>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>   
        ) 
    }
}

Status.propTypes = {
    fetchCompany : PropTypes.func,
    permit : PropTypes.object
}

export default Status
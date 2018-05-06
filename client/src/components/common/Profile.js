import React from 'react'
import {PropTypes} from 'prop-types'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom'
  import { fetchCompany, fetchUser } from "../../actions/actions";

/*
   The profile page component
   loaded for authenticated users, containing their information
   Makes use of boston.gov stylings to introduce the user to the site
   
   Bradley Boutcher and Christine Frandsen 2018
*/

export default class Profile extends React.Component {

    componentWillMount() {
        const { isAuthenticated, dispatch } = this.props
        if(isAuthenticated){
        dispatch(fetchCompany())
        dispatch(fetchUser())
        }
      }
   
   
    render() {
        
        const {  user, permit } = this.props

        // Main container for our profile component
        const profileContainer = {
            position: 'relative',
            height: '400px',
            marginBottom: '10%'
        };

        // Center the content of the home body within its container
        const profileContent = {
            textAlign: 'center',
            position: 'relative',
        }
        console.log(user)
        return (
             <div className = 'profileContainer' style = { profileContainer }>              
                <div className = "profileContent" style = { profileContent} >
                    <div className="b">
                       { user && <div className="b-c">
                            <div className="h2 tt-u ta-c p-h300"> 
                                { user.first } {user.last} 
                            </div>
                            <hr className="hr hr--sq m-h300 m-v500" />
                            { permit && permit.companies &&
                            < div className="ta-c p-h200 t--intro">
                               { user.email } <br/>
                               { user.address1} <br/>
                               { user.city }, {user.state} {user.zip} <br/>
                               { user.phone } <br/>
                    
                               Permits applied for: {permit.companies.length}
                               
                            </div>
                            }
                            
                        </div>
                        
                       }
                        <Link to="/update" class="btn btn--700" onClick={this.refreshPage}>Update Information</Link>
                    </div>
                </div>
          </div>  
        )
    }
}
  
Profile.propTypes = {
    user: PropTypes.object,
    dispatch: PropTypes.func

}
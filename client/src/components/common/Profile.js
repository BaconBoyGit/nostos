import React from 'react'
import {PropTypes} from 'prop-types'
import { fetchUser } from '../../actions/actions';

/*
   The profile page component
   loaded for authenticated users, containing their information
   boston.gov stylings to introduce the user to the site
   
   Bradley Boutcher 2018
*/

export default class Profile extends React.Component {

    // Render inline style attributes
    render() {
        
        const { dispatch, isAuthenticated, userData } = this.props
        var {email, firstname, lastname} = String

        // container for our profile element
        const profileContainer = {
            position: 'relative',
            height: '400px'
        };

        // Center the content of the home body within its container
        const profileContent = {
            textAlign: 'center',
            position: 'relative',
        }

        console.log(dispatch(fetchUser()))
        
        return (
             <div className = 'profileContainer' style = { profileContainer }>              
                <div className = "profileContent" style = { profileContent} >
                    <div className="b">
                        <div className="b-c">
                            <div className="h2 tt-u ta-c p-h300"> {email} </div>
                            <hr className="hr hr--sq m-h300 m-v500" />
                            <div className="ta-c p-h200 t--intro">
                               Address Goes Here
                            </div>
                        </div>
                    </div>
                </div>
          </div>  
        )
    }
  }
  
Profile.propTypes = {
    dispatch: PropTypes.func,
    isAuthenticated: PropTypes.bool.isRequired,
    userData: PropTypes.func,
}
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

/*
   The profile page component
   loaded for authenticated users, containing their information
   boston.gov stylings to introduce the user to the site
   
   Bradley Boutcher 2018
*/

class Profile extends React.Component {

  // Set default map attributes on construction
    constructor(props){
        super(props)
        // Set the default location of focus for the map
        this.state = {
        }
    }

    // Upon mounting component, instantiate a map with the following attributes
    componentDidMount() {
    }
  
    //Handle map removal
    componentWillUnmount() {
    }
  
    // Render inline style attributes
    render() {


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

      return (
          <div className = 'profileContainer' style = { profileContainer }>              
                <div className = "profileContent" style = {profileContent} >
                    <div class="b">
                        <div class="b-c">
                            <div class="h2 tt-u ta-c p-h300">Firstname Lastname</div>
                            <hr class="hr hr--sq m-h300 m-v500" />
                            <div class="ta-c p-h200 t--intro">
                               Address Goes Here
                            </div>
                        </div>
                    </div>
                </div>
          </div>
          
      )

    }
  }
  
export default Profile  

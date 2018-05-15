import React from 'react'
import {PropTypes} from 'prop-types'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    withRouter
  } from 'react-router-dom'
  import { updateUser, fetchUser } from '../../actions/actions';
  import { fetchUpdate } from '../../actions/actions';

/*
   The profile page component
   loaded for authenticated users, containing their information
   Makes use of boston.gov stylings to introduce the user to the site
   
   Bradley Boutcher and Christine Frandsen 2018
*/

 class ProfileUpdate extends React.Component {

    componentWillMount() {
        const { isAuthenticated, dispatch } = this.props
        if(isAuthenticated){
            dispatch(fetchUser())
        }
      }
    
    
    render() {

        const {  user, permit } = this.props

        // Main container for our profile component
        const profileContainer = {

            marginBottom: '1%',
            textAlign: 'center',
        };


        const formAlign = {
            marginLeft: '25%'
        }
        console.log(user)
        return (
             <div className = 'profileContainer' style = { profileContainer }>              
                    <div className="b">
                       { user && <div className="b-c">
                       
                            <div className="h2 tt-u ta-c p-h300"> 
                                { user.first } {user.last} 
                            </div>
                            <hr className="hr hr--sq m-h300 m-v500" />

                            <form id="updateInfo" onSubmit={(event) => this.registerClick(event)} >
                            <div style = {formAlign}>
                            < div className="ta-c p-h200 t--intro">
                            <div className="fs-c fs-c--i m-b300">
                            <div className="txt g--7">
                            <input ref="email" id="email" type="text" className="txt-f txt-f--sm txt-f txt-f--sm--sm" defaultValue={user.email} placeholder="Email" />
                            </div>
                            </div>
                            <div className="fs-c fs-c--i m-b300">
                            <div className="txt g--7">
                            <input ref="phone" id="phone" type="text"  className="txt-f txt-f--sm txt-f txt-f--sm--sm" defaultValue={user.phone} placeholder="Phone number"/>
                            </div>
                            </div>
                            <div className="fs-c fs-c--i m-b300">
                            <div className="txt g--7">
                            <input ref="address" id="address" type="text" className="txt-f txt-f--sm txt-f txt-f--sm--sm" defaultValue={user.address1} placeholder="Address"/>
                            </div>
                            </div>
                            <div className="fs-c fs-c--i m-b300">
                            <div className="txt g--7">
                            <input ref="city" id="city" type="text"  className="txt-f txt-f--sm txt-f txt-f--sm--sm" defaultValue={user.city} placeholder="City"/>
                            </div>
                            </div>
                            <div className="fs-c fs-c--i m-b300">
                            <div className="txt g--7">
							<div className="sel-c sel-c--fw">
								<select name="language" ref="state" className="sel-f" defaultValue={user.state}>
									<option value="AL">Alabama</option>
									<option value="AK" >Alaska</option>
									<option value="AR">Arkansas</option>
									<option value="CA">California</option>
									<option value="CO">Colorado</option>
									<option value="CT">Connecticut</option>
									<option value="DE">Delaware</option>
									<option value="FL">Florida</option>
									<option value="GA">Georgia</option>
									<option value="HI">Hawaii</option>
									<option value="ID">Idaho</option>
									<option value="IL">Illinois</option>
									<option value="IN">Indiana</option>
									<option value="IA">Iowa</option>
									<option value="KS">Kansas</option>
									<option value="KY">Kentucky</option>
									<option value="LA">Louisiana</option>
									<option value="ME">Maine</option>
									<option value="MD">Maryland</option>
									<option value="MA">Massachusetts</option>
									<option value="MI">Michigan</option>
									<option value="MN">Minnesota</option>
									<option value="MS">Mississippi</option>
									<option value="MO">Missouri</option>
									<option value="MT">Montana</option>
									<option value="NE">Nebraska</option>
									<option value="NV">Nevada</option>
									<option value="NH">New Hampshire</option>
									<option value="NJ">New Jersey</option>
									<option value="NM">New Mexico</option>
									<option value="NY">New York</option>
									<option value="NC">North Carolina</option>
									<option value="ND">North Dakota</option>
									<option value="OH">Ohio</option>
									<option value="OK">Oklahoma</option>
									<option value="OR">Oregon</option>
									<option value="PA">Pennsylvania</option>
									<option value="RI">Rhode Island</option>
									<option value="SC">South Carolina</option>
									<option value="SD">South Dakota</option>
									<option value="TN">Tennessee</option>
									<option value="TX">Texas</option>
									<option value="UT">Utah</option>
									<option value="VT">Vermont</option>
									<option value="VA">Virginia</option>
									<option value="WA">Washington</option>
									<option value="WV">West Virginia</option>
									<option value="WI">Wisconsin</option>
									<option value="WY">Wyoming</option>
									<option value="DC">District of Columbia</option>
									<option value="PR">Puerto Rico</option>
									<option value="Guam">Guam</option>
									<option value="AS">American Samoa</option>
									<option value="UVI">U.S. Virgin Islands</option>
								</select>
						    </div>
                            </div>
					    </div>
                        <div className="fs-c fs-c--i m-b300">
                            <div className="txt g--7">
                            <input ref="zip" id="zip" type="text"  className="txt-f txt-f--sm txt-f txt-f--sm--sm" defaultValue={user.zip} placeholder="Zip code"/>
                            </div>
                        </div>   
                           
                       </div>
                       </div>
                            <div className="m-v400 m-h200">
                            <input type="submit" className="btn" value="Update"/>
                            </div>
                       

                            </form>
                            </div>
                        
                       }
                    </div>
                </div>
          
        )
    }


    registerClick= function(e) {
		e.preventDefault()
		// Pull all of our references from the fulled out form

		const email = this.refs.email
		const address = this.refs.address
		const city = this.refs.city
		const state = this.refs.state
        const zip = this.refs.zip
        const phone = this.refs.phone

		// Build our credentials to send to the backend
		const creds = {  email: email.value.trim(), phone: phone.value.trim(), 
                         address: address.value.trim(), city: city.value.trim(), 
                         state: state.value.trim(), zip: zip.value.trim()}

        this.props.dispatch(updateUser(creds))
        this.props.history.push('/profile');
	  }
}
  
ProfileUpdate.propTypes = {
    user: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
	errorMessage: PropTypes.string

}
export default withRouter(ProfileUpdate)
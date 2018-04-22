import React from 'react'
import PropTypes from 'prop-types'; 

import { registerUser } from '../../actions/actions';

/*
   The registration page component
   loaded for unauthenticated users
   Makes use of boston.gov stylings to introduce the user to the site
   
   Bradley Boutcher 2018
*/

const showError = false;

export default class Register extends React.Component {

	state = { showError: true }

	render() {

		const { errorMessage, dispatch } = this.props
		
		// Center the registration form on the page
		const signupContainer = {
			marginLeft: "10%",
			marginRight: '10%',
			marginBottom: '5%'
		}

		return (  
  
			<div className ="signup-container" style = { signupContainer } >  

				{/* 
					We wait until the form can be successfully submitted before 
					calling our register functino 
				*/}
				<form id="registerForm" onSubmit={(event) => this.registerClick(event)}>

					<h1 className="hro-t"> <font color = "black" size="6" >Sign Up</font></h1>
					<div className="fs-c fs-c--i m-b300">
						<div className="txt g--6">
							<label htmlFor="first_name" className="txt-l txt-l--mt000">First name*</label>
							<input ref="first" id="first_name" type="text" placeholder="First name" className="txt-f txt-f--sm txt-f txt-f--sm--sm" required/>
						</div>
						<div className="txt g--6">
							<label htmlFor="last_name" className="txt-l txt-l--mt000">Last name*</label>
							<input ref="last" id="last_name" type="text" placeholder="Last name" className="txt-f txt-f--sm txt-f txt-f--sm--sm" required/>
						</div>
					</div>

					<div className="fs-c fs-c--i m-b300">
						<div className="txt g--6">
							<label htmlFor="title" className="txt-l txt-l--mt000">Title</label>
							<input ref="title" id="title" type="text" placeholder="Title" className="txt-f txt-f--sm"/>
						</div>
						<div className="txt g--6">
							<label htmlFor="company" className="txt-l txt-l--mt000">Company</label>
							<input ref="company" type="text" placeholder="Company" className="txt-f txt-f--sm"/>
						</div>
					</div>

					<h2 className="hro-t"> <font color = "gray" size="5">Address</font></h2>
					
					<div className="fs-c fs-c--i m-b300">
						<div className="txt g--6">
							<label htmlFor="address" className="txt-l txt-l--mt000">Address 1*</label>
							<input ref="address1" type="text" placeholder="Address" className="txt-f txt-f--sm" required/>
						</div>
						<div className="txt g--6">
							<label htmlFor="alt_addrss" className="txt-l txt-l--mt000">Address 2</label>
							<input ref="address2" type="text" placeholder="Alternate address" className="txt-f txt-f--sm"/>
						</div>
					</div>

					<div className="fs-c fs-c--i m-b300">

					<div className="txt g--6">
						<label htmlFor="city" className="txt-l txt-l--mt000">City*</label>
						<input ref="city" type="text" placeholder="City" className="txt-f txt-f--sm" required/>
					</div>

					<div className="txt g--6">
						<label htmlFor="state" className="txt-l txt-l--mt000">State*</label>
							<div className="sel-c sel-c--fw">
								<select name="language" ref="state" className="sel-f" required>
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
									<option selected="MA">Massachusetts</option>
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
						<div className="txt g--6">
							<label htmlFor="zip_code" className="txt-l txt-l--mt000">Zip Code*</label>
							<input ref="zip" type="text" placeholder="Zip code" className="txt-f txt-f--sm" required/>
						</div>
					</div>

					<h2 className="hro-t"> <font color = "gray" size="5">Contact Info</font></h2>
					
					<div className="fs-c fs-c--i m-b300">
						<div className="txt g--6">
							<label htmlFor="email" className="txt-l txt-l--mt000">Email*</label>
							<input ref="email" type="email" placeholder="Email" className="txt-f txt-f--sm" required/>
						</div>
						<div className="txt g--6">
							<label htmlFor="emailCon" className="txt-l txt-l--mt000">Confirm Email*</label>
							<input ref="emailCon" type="email" placeholder="Confirm" className="txt-f txt-f--sm" required/>
						</div>
					</div>
					<div className="txt g--6">
							<label htmlFor="phone" className="txt-l txt-l--mt000">Telephone*</label>
							<input ref="phone" type="text" placeholder="Telephone number" className="txt-f txt-f--sm" required/>
					</div>

					<h2 className="hro-t"> <font color = "gray" size="5"> Password </font></h2>

					<div className="fs-c fs-c--i m-b300">
						<div className="txt g--6">
							<label htmlFor="password" className="txt-l txt-l--mt000">Password*</label>
							<input ref="password" type="password" placeholder="Password" className="txt-f txt-f--sm" required/>
						</div>
					</div>

					<div className="fs-c fs-c--i m-b300">

					<div className="txt g--6">
						<label htmlFor="confirm" className="txt-l txt-l--mt000">Password Confirmation*</label>
						<input ref="confirm" type="password" placeholder="Confirm" className="txt-f txt-f--sm" required/>
					</div>
					</div>

					<div className="m-v400 m-h200">

					{/* The component must be submit type for validation to work */}
					<input type="submit" className="btn" value="Submit">
					
					</input>

					</div>	
				</form>    
			</div>
		
		)
	}
	
	registerClick= function(e) {
		e.preventDefault()
		// Pull all of our references from the fulled out form
		const first = this.refs.first
		const last = this.refs.last
		const title = this.refs.title
		const company = this.refs.company
		const email = this.refs.email
		const emailCon = this.refs.emailCon
		const phone = this.refs.phone
		const password = this.refs.password
		const confirm = this.refs.confirm
		const address1 = this.refs.address1
		const address2 = this.refs.address2
		const city = this.refs.city
		const state = this.refs.state
		const zip = this.refs.zip

		// Build our credentials to send to the backend
		const creds = { first: first.value.trim(), last: last.value.trim(), confirm: confirm.value.trim(), title: title.value.trim(),
						company: company.value.trim(), email: email.value.trim(), emailCon: emailCon.value.trim(), phone: phone.value.trim(),
						password: password.value.trim(), address1: address1.value.trim(), address2: address2.value.trim(),
						city: city.value.trim(), state: state.value.trim(), zip: zip.value.trim()}

		this.props.dispatch(registerUser(creds))
	  }

}

Register.propTypes = {
	dispatch: PropTypes.func.isRequired,
	errorMessage: PropTypes.string
}

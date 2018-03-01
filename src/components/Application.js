import React from 'react';
import './Application.css';
var blight = require('../images/b-dark.svg');
var blogo = require('../images/logo.svg');
var bseal = require('../images/seal.svg');

class application extends React.Component {
    render () {   
        return (        
            <div className ="App">  

            <form action="#" method="GET">
            <h1 class="hro-t"> <font color = "black" size="6" >Sign Up</font></h1>
            <div class="fs-c fs-c--i m-b300">
            <div class="txt g--6">
                <label for="first_name" class="txt-l txt-l--mt000">First name*</label>
                <input id="first_name" type="text" placeholder="First name" class="txt-f" required/>
            </div>
            <div class="txt g--6">
                <label for="last_name" class="txt-l txt-l--mt000">Last name*</label>
                <input id="last_name" type="text" placeholder="Last name" class="txt-f" required/>
            </div>
            </div>
            <div class="fs-c fs-c--i m-b300">
            <div class="txt g--6">
                <label for="title" class="txt-l txt-l--mt000">Title</label>
                <input id="title" type="text" placeholder="Title" class="txt-f"/>
            </div>
            <div class="txt g--6">
                <label for="company" class="txt-l txt-l--mt000">Company</label>
                <input id="company" type="text" placeholder="Company" class="txt-f"/>
            </div>
            </div>
            <h2 class="hro-t"> <font color = "gray" size="5">Address</font></h2>
            <div class="fs-c fs-c--i m-b300">
            <div class="txt g--6">
                <label for="address" class="txt-l txt-l--mt000">Address 1*</label>
                <input id="address" type="text" placeholder="Address" class="txt-f" required/>
            </div>
            <div class="txt g--6">
                <label for="alt_addrss" class="txt-l txt-l--mt000">Address 2</label>
                <input id="alt_addrss" type="text" placeholder="Alternate address" class="txt-f"/>
            </div>
            </div>
            <div class="fs-c fs-c--i m-b300">
            <div class="txt g--6">
                <label for="city" class="txt-l txt-l--mt000">City*</label>
                <input id="city" type="text" placeholder="City" class="txt-f" required/>
            </div>
            <div class="txt g--6">
                <label for="state" class="txt-l txt-l--mt000">State*</label>
                <div class="sel-c sel-c--fw">
                    <select name="language" id="language" class="sel-f" required>
                    <option value="AL">Alabama</option>
                    <option selected="selected" value="AK">Alaska</option>
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
            <div class="fs-c fs-c--i m-b300">
            <div class="txt g--6">
                <label for="zip_code" class="txt-l txt-l--mt000">Zip Code*</label>
                <input id="zip_code" type="text" placeholder="Zip code" class="txt-f" required/>
            </div>
            </div>
            <h2 class="hro-t"> <font color = "gray" size="5">Contact Info</font></h2>
            <div class="fs-c fs-c--i m-b300">
            <div class="txt g--6">
                <label for="email" class="txt-l txt-l--mt000">Email*</label>
                <input id="email" type="text" placeholder="Email" class="txt-f" required/>
            </div>
            <div class="txt g--6">
                <label for="cell" class="txt-l txt-l--mt000">Mobile</label>
                <input id="cell" type="text" placeholder="Mobile number" class="txt-f"/>
            </div>
            </div>
            <div class="fs-c fs-c--i m-b300">
            <div class="txt g--6">
                <label for="phone" class="txt-l txt-l--mt000">Telephone*</label>
                <input id="phone" type="text" placeholder="Telephone number" class="txt-f" required/>
            </div>
            <div class="txt g--6">
                <label for="fax" class="txt-l txt-l--mt000">Fax</label>
                <input id="fax" type="text" placeholder="Fax number" class="txt-f"/>
            </div>
            </div>
            <h2 class="hro-t"> <font color = "gray" size="5">Emails</font></h2>
            <div class="fs-c fs-c--i m-b300">
            <div class="txt g--6">
                <label for="update" class="txt-l txt-l--mt000">Receive Status Updates</label>
                <div class="sel-c sel-c--fw">
                    <select name="language" id="language" class="sel-f">
                    <option value="AL">Immediately</option>
                    <option value="AL">Daily</option>
                    <option value="AL">Weekly</option>
                    <option value="AL">Never</option>
                    </select>
            </div>
            </div>
            </div>
            <h2 class="hro-t"> <font color = "gray" size="5">Password</font></h2>
            <div class="fs-c fs-c--i m-b300">
            <div class="txt g--6">
                <label for="password" class="txt-l txt-l--mt000">Password*</label>
                <input id="password" type="text" placeholder="Password" class="txt-f" required/>
            </div>
            </div>
            <div class="fs-c fs-c--i m-b300">
            <div class="txt g--6">
                <label for="confirm" class="txt-l txt-l--mt000">Password Confirmation*</label>
                <input id="confirm" type="text" placeholder="Retype password" class="txt-f" required/>
            </div>
            </div>
            
            <label class="cb" for="checkbox-">
            <input id="checkbox-" name="public_notices" type="checkbox" value="public_notices" class="cb-f"/>
            <span class="cb-l">I accept the Terms of Service*</span>
            </label>
            <div class="m-v400 m-h200">
            <button class="btn">Sign Up</button>
            </div>
           


        
        </form>    


            </div>
        
            
               )
    }
}

export default application;

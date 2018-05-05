import React from 'react';
import mapboxgl from 'mapbox-gl';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import PropTypes from 'prop-types'; 
import { createPermit } from '../../actions/actions';


/*
   This class is used to allow users to apply for their moving truck permit,
   specifying data, time, and location. This component is only accessible for 
   authenticated users
   Bradley Boutcher and Christine Frandsen 2018
*/

const showError = false;

export default class Permit extends React.Component {

    refreshPage() {
        window.location.reload()
      } 
  

    state = { showError: true }

      // Set default map attributes on construction
     constructor(props){
        super(props)
        // Set the default location of focus for the map
        this.state = {
            lng:-71.055,
            lat: 42.365,
            zoom: 13,
        }
        // Set the boundaries for the map
        this.bounds = [
            [-71.222102, 42.215041], // Southwest coordinates
            [-70.935952, 42.413089]  // Northeast coordinates
        ];
    }

    

    // Upon mounting component, instantiate a map with the following attributes
    componentDidMount() {
      mapboxgl.accessToken = 'pk.eyJ1IjoiY2ZyYW5kc2VuMDkiLCJhIjoiY2plYnlvdDFoMGkzcTMzbzd6N3Jhd3ZlMCJ9.HMzKJI3qhrImWmHIuaE8EA';
        var map = new mapboxgl.Map({
        container: this.mapContainer,
        // General map of Boston
        style: 'mapbox://styles/cfrandsen09/cjfr00sai5l9q2rmmzoz0pjl0',
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom,
        attributionControl: false,
        maxBounds: this.bounds,
        // We want this specific map to be used for style, not function, so we disaple interactivity
        interactive: true,
      });

     //Adds navigation controls
      map.addControl(new mapboxgl.NavigationControl());

    }
  
    //Handle map removal
    

    

    render () {   

      const { errorMessage, dispatch, permit } = this.props

    // Define our styling for the map 
      const mapStyle = {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '49%',
        height: '350px'
      };
      console.log(permit)

      // Define a relative container for our map, and anything inside of it
      const mapContainerStyle = {
        position: 'relative',
        height: '350px',
        marginBottom: '2%'
      };

      // Center the content of the home body within its container
        const signupContainer = {
            marginLeft: "10%",
            marginRight: '10%',
            marginBottom: '5%'
        }

        return (    

            <div className ="permit" style={signupContainer}>  

            <form  id="permitForm" onSubmit={(event) => this.permitClick(event)}>
                <h1 class="hro-t"> <font color = "black" size="6" >Apply for New Permit</font></h1>
                    <div class="fs-c fs-c--i m-b300">
                        <div class="txt g--6">
                            <label for="address" class="txt-l txt-l--mt000">Address Moving into or out of</label>
                            <input ref="location" id="address" type="text" placeholder="Address" class="txt-f" required/>
                        </div>
                    </div>
                    <div className = 'mapContainer' style = { mapContainerStyle }>
                        <div style={ mapStyle } ref={el => this.mapContainer = el} />
                    </div>
                     <div class="fs-c fs-c--i m-b300">
                        <div class="txt g--6">
                            <label for="start" class="txt-l txt-l--mt000">Select Start Time</label>
                            <div class="sel-c sel-c--fw">
                                <select ref="start" name="time" id="time" class="sel-f">
                                    <option value="8:00 AM">8:00 AM</option>
                                    <option value="8:30 AM">8:30 AM</option>
                                    
                                    <option value="9:00 AM">9:00 AM</option>
                                    <option value="9:30 AM">9:30 AM</option>
                                    
                                    <option value="10:00 AM">10:00 AM</option>
                                    <option value="10:30 AM">10:30 AM</option>
                                    
                                    <option value="11:00 AM">11:00 AM</option>
                                    <option value="11:30 AM">11:30 AM</option>
                                    
                                    <option value="12:00 PM">12:00 PM</option>
                                    <option value="12:30 PM">12:30 PM</option>
                                    
                                    <option value="1:00 PM">1:00 PM</option>
                                    <option value="1:30 PM">1:30 PM</option>
                                    
                                    <option value="2:00 PM">2:00 PM</option>
                                    <option value="2:30 PM">2:30 PM</option>
                                    
                                    <option value="3:00 PM">3:00 PM</option>
                                    <option value="3:30 PM">3:30 PM</option>

                                    <option value="4:00 PM">4:00 PM</option>
                                    <option value="4:30 PM">4:30 PM</option>
                                    
                                    <option value="5:00 PM">5:00 PM</option>
                                    <option value="5:30 PM">5:30 PM</option>
                                </select>
                             </div>
                        </div>
                    </div>
            <div class="fs-c fs-c--i m-b300">
            <div class="txt g--6">
                <label for="end" class="txt-l txt-l--mt000">Select End Time</label>
                <div class="sel-c sel-c--fw">
                <select ref="end" name="time" id="time" class="sel-f">
                    <option value="8:30 AM">8:30 AM</option>
                    
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="9:30 AM">9:30 AM</option>
                    
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="10:30 AM">10:30 AM</option>
                    
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="12:30 PM">12:30 PM</option>
                    
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="1:30 PM">1:30 PM</option>
                    
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="2:30 PM">2:30 PM</option>
                    
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="3:30 PM">3:30 PM</option>

                    <option value="4:00 PM">4:00 PM</option>
                    <option value="4:30 PM">4:30 PM</option>
                    
                    <option value="5:00 PM">5:00 PM</option>
                    <option value="5:30 PM">5:30 PM</option>
                </select>
                </div>
            </div>
            </div>  
            <div class="fs-c fs-c--i m-b300">
            <div class="txt g--6">
                <label for="date" class="txt-l txt-l--mt000">Date</label>
                <input ref="date" id="date" type="text" placeholder="mm/dd/yyyy" class="txt-f" required/>
            </div>
            </div>  
            <div class="m-v400 m-h200">

            <input type="submit" className="btn" value="Submit"> 
           
            </input>
            
            </div>
        </form>    


            </div>
        
            
        )
    }


permitClick= function(e) {
    e.preventDefault()
    // Pull all of our references from the filled out form
    const location = this.refs.location
    const start = this.refs.start
    const end = this.refs.end
    const date = this.refs.date

    // Build our credentials to send to the backend
    const creds = { location: location.value.trim(), start: start.value.trim(), end: end.value.trim(), date: date.value.trim()}
    this.props.dispatch(createPermit(creds))
    
 
  }

}

Permit.propTypes = {
	dispatch: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
    permit : PropTypes.object,
}
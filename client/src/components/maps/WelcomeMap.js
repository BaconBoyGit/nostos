import React from 'react';
import mapboxgl from 'mapbox-gl'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import PropTypes from 'prop-types'; 

/*
*   The body of the home page,
*   Makes use of a basic, non-interactive mapbox and
*   boston.gov stylings to introduce the user to the site
*   
*   Bradley Boutcher 2018
*/

class Map extends React.Component {

  // Set default map attributes on construction
    constructor(props){
        super(props)
        // Set the default location of focus for the map
        this.state = {
            lng:-71.059179,
            lat: 42.357816,
            zoom: 12,
        }
        // Set the boundaries for the map
        this.bounds = [
            [-71.222102, 42.215041], // Southwest coordinates
            [-70.935952, 42.413089]  // Northeast coordinates
        ];
    }

    // Upon mounting component, instantiate a map with the following attributes
    componentDidMount() {
      mapboxgl.accessToken = 'pk.eyJ1IjoiYnJhZGxleWJvdXRjaGVyIiwiYSI6ImNqZDF3eHo4MTBsbm8ycXBhY3ZtdzZwNWMifQ.2u-Wk2dbshYXVO8qBk7G5Q';
      this.map = new mapboxgl.Map({
        container: this.mapContainer,
        // We want a specific style, very basic with a blue overlay
        style: 'mapbox://styles/bradleyboutcher/cjdnhe0iz2hz02roy6tqotg07',
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom,
        attributionControl: false,
        maxBounds: this.bounds,
        // We want this specific map to be used for style, not function, so we disaple interactivity
        interactive: false,
      });
    }
  
    //Handle map removal
    componentWillUnmount() {
      this.map.remove();
    }

    refreshPage() {
      window.location.reload()
  }
  
    // Render inline style attributes
    render() {

      const { isAuthenticated, user } = this.props


      // Define our styling for the map
      const mapStyle = {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '100%',
        height: '400px'
      };

      // Define a relative container for our map, and anything inside of it
      const mapContainerStyle = {
        position: 'relative',
        height: '400px'
      };

       // Match the height of the mapbox container
       const homeBodyStyle = {
        height: 400,
        padding: 25,
    }

      // Center the content of the home body within its container
      const homeContent = {
          textAlign: 'center',
          position: 'relative',
      }

      return (
          <div className = 'mapContainer' style = { mapContainerStyle }>
            <div style={ mapStyle } ref={el => this.mapContainer = el} />
              
              <div className = "homeBody" style = {homeBodyStyle} >
                  <div style= { homeContent }>
                              <div class="hro-c">
                                  <div class="hro-i hro-i--l">Welcome to the City of Boston</div>
                                  <h1 class="hro-t hro-t--l">Moving Truck Permit Portal</h1>
                                      <nav>
                                        {isAuthenticated &&
                                      <Link to="/permit" class="btn btn--700" onClick={this.refreshPage}>Get Started</Link>
                                        }
                                         {!isAuthenticated &&
                                      <Link to="/register" class="btn btn--700" onClick={this.refreshPage}>Get Started</Link>
                                      }
                                      </nav>
                                     
                          

                              </div>
                  </div>
              </div>
          </div>
          
      )

    }
  }

  Map.propTypes = {
   
}
  
export default Map  

import React from 'react';
import mapboxgl from 'mapbox-gl'
// We want the body of our page to be rendered overtop of the map
import HBody from './HomeBody'

class Map extends React.Component {

  // Set default map attributes on construction
    constructor(props){
        super(props)
        // Set the default location of focus for the map
        this.state = {
            lng:-71.055683,
            lat: 42.359997,
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
      this.map.addControl(new mapboxgl.AttributionControl(), 'bottom-right');
    }
  
    //Handle map removal
    componentWillUnmount() {
      this.map.remove();
    }
  
    // Render inline style attributes
    render() {

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

      return (
          <div className = 'mapContainer' style = { mapContainerStyle }>
            <div style={ mapStyle } ref={el => this.mapContainer = el} />
            <HBody />
          </div>
      )

    }
  }
  
export default Map  

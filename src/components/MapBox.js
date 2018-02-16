import React from 'react';
import mapboxgl from 'mapbox-gl'

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
      const style = {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '100%',
        height: '75%'
      };
  
      return <div style={style} ref={el => this.mapContainer = el} />;
    }
  }
  
export default Map  

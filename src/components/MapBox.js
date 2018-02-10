import React from 'react';
import mapboxgl from 'mapbox-gl'

class Map extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            lng: -71.0580,
            lat: 42.3604,
            zoom: 13,
        }
    }

    componentDidMount() {
      mapboxgl.accessToken = 'pk.eyJ1IjoiYnJhZGxleWJvdXRjaGVyIiwiYSI6ImNqZDF3eHo4MTBsbm8ycXBhY3ZtdzZwNWMifQ.2u-Wk2dbshYXVO8qBk7G5Q';
      this.map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom,
        attributionControl: false
      });
      this.map.addControl(new mapboxgl.AttributionControl(), 'bottom-right');
    }
  
    componentWillUnmount() {
      this.map.remove();
    }
  
    render() {
      const style = {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '100%',
        height: '100%'
      };
  
      return <div style={style} ref={el => this.mapContainer = el} />;
    }
  }
  
export default Map  
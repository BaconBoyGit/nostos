import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import mapboxgl from 'mapbox-gl'
import ToolTip from './MapToolTip'

/*
*   The map used for the application page,
*   Includes parking meter, street address, and zip code data.
*   Interactive to allow users to select locations
*   boston.gov stylings to introduce the user to the site
*   
*   Bradley Boutcher 2018
*/

export default class ApplicationMap extends Component {

    tooltipContainer;

    setTooltip(features) {
      if (features.length) {
        ReactDOM.render(
          React.createElement(
            ToolTip, {
              features
            }
          ),
          this.tooltipContainer
        );
      } else {
        this.tooltipContainer.innerHTML = '';
      }
    }
  
    // Set default map attributes on construction
    constructor(props){
        super(props)
        // Set the default location of focus for the map
        this.state = {
            lng:-71.053908,
            lat: 42.354793,
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
         // Container to put React generated content in.
        this.tooltipContainer = document.createElement('div');

        mapboxgl.accessToken = 'pk.eyJ1IjoiYnJhZGxleWJvdXRjaGVyIiwiYSI6ImNqZDF3eHo4MTBsbm8ycXBhY3ZtdzZwNWMifQ.2u-Wk2dbshYXVO8qBk7G5Q';
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            // We want a specific style, very basic with a blue overlay
            style: 'mapbox://styles/bradleyboutcher/cjdasfi0l5ho62sl34mfhfoo3',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom,
            attributionControl: false,
            maxBounds: this.bounds,
        });
         // Add zoom and rotation controls to the map.
        this.map.addControl(new mapboxgl.NavigationControl());
        
        const options = {
            layers: [
                'sam'
            ]
        }
        
        const tooltip = new mapboxgl.Marker(this.tooltipContainer, {
            offset: [-120, 0]
          }).setLngLat([0,0]).addTo(this.map);
          
        this.map.on('mousemove', 'sam', (e) => {
            const features = this.map.queryRenderedFeatures(e.point);
            tooltip.setLngLat(e.lngLat);
            this.map.getCanvas().style.cursor = features.length ? 'pointer' : '';
            this.setTooltip(features);
        });
    
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
          </div>
          
      )

    }
  }
  

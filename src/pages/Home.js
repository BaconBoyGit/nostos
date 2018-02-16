import React, { Component } from 'react';
import Header from '../components/header';
import MapBox from '../components/MapBox';
import Hbody from '../components/HomeBody';


class Home extends Component {
 
    // Currently no props are being used, but we retain the 
    // structure for later use
    constructor(props) {
      super(props)
    }

  render() {
    // Render our components as a single part
    return [
      <MapBox />,
      <Header />,
      <Hbody />,
    ];
  }
}

export default Home;

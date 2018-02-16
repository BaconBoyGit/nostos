import React, { Component } from 'react';
import Header from '../components/Header';
import MapBox from '../components/MapBox';
import Footer from '../components/Footer';


class Home extends Component {
 

  render() {
    // Render our components as a single part
    return [
      <Header />,
      <MapBox /> ,
      <Footer />
    ];
  }
}

export default Home;

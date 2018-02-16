import React, { Component } from 'react';
import Header from '../components/header';
import MapBox from '../components/MapBox';
import Footer from '../components/footer';


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

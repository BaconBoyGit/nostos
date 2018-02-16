import React, { Component } from 'react';
import Header from '../components/header';
import MapBox from '../components/MapBox';
import Hbody from '../components/home-body';

class App extends Component {
 
    constructor(props) {
      super(props)
      this.state = {date: new Date()};
    }

  render() {
    
    return [
      <MapBox />,
      <Header />,
      <Hbody />,
    ];
  }
}

export default App;

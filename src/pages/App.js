import React, { Component } from 'react';
import './App.css';
import Home from '../components/home';
import MapBox from '../components/MapBox';

class App extends Component {

    constructor(props) {
      super(props)
      this.state = {date: new Date()};
    }

  render() {
    
    return [
      <MapBox />,
      <Home />
    ];
  }
}

export default App;

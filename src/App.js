import React, { Component } from 'react';
import './App.css';
import Home from './pages/home';
import MapBox from './MapBox';

class App extends Component {

    constructor(props) {
      super(props)
      this.state = {date: new Date()};
    }

  render() {
    
    return [
      <Home />
      ,     
      <MapBox />
    ];
  }
}

export default App;

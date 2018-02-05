import React, { Component } from 'react';
import './App.css';
import MapBox from './MapBox';
var blight = require('./images/b-light.svg');
var blogo = require('./images/logo.svg');
var bseal = require('./images/seal.svg');

class App extends Component {

    constructor(props) {
      super(props)
      this.state = {date: new Date()};
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    tick() {
      this.setState({
        date: new Date()
      });
    }
    
  render() {
    return [
      <div className ="App">

        <div class="mn">

            <header class="h" role="header">

                <div class="lo">
                        <img src= { blogo } alt="City of Boston" class="lo-i" />
                </div>
                <div class="s">
                    <img src= { bseal }  alt="City of Boston" class="s-i" />
                </div>
               
            </header>
        </div>
      </div>
      ,     
        <MapBox />
    ];
  }
}

export default App;

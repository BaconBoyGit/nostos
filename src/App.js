import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapBox from './MapBox';

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
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> {this.state.date.toLocaleDateString()} </h1>
        </header>
        <p className="App-intro">
          It is {this.state.date.toLocaleTimeString()}.
        </p>
    </div>,
    <MapBox />
    );
  }
}

export default App;

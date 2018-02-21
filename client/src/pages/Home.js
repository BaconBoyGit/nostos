import React, { Component } from 'react';
import Header from '../components/Header';
import MapBox from '../components/MapBox';
import Footer from '../components/Footer';
import 'whatwg-fetch';

class Home extends Component {
  
    // Define a data model for this page
    state = {
      response: ''
    };

    // Upon mounting, make a call to the api
    componentDidMount() {
      this.callApi()
        .then(res => this.setState({ response: res.express }))
        .catch(err => console.log(err));
    }

    // A helper function to async access our api
    callApi = async () => {
      const response = await fetch('/api/hello');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      return body;
    };

  render() {
    // Render our components as a single part
    return [
      <Header />,
      <MapBox />,
      <Footer />,
      <div> {this.state.response} </div>
    ];
  }
}

export default Home;

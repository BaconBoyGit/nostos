import React from 'react';
import PropTypes from 'prop-types'
import Header from './common/Header';
import MapBox from './maps/MapBox';
import Footer from './common/Footer';

class App extends React.Component {
  
    // Define a data model for this page
    state = {
      response: ''
    };
    


    App = () => (

        <div className = "app">
          <Header />
          {this.props.children}
          <Footer />
        </div>

    )

  render() {
    // Render our components as a single part
    return this.App();
  }
}

App.propTypes = {  
  children: PropTypes.object.isRequired
};

export default App;

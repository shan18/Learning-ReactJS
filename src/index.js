import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  state = { lat: null, errorMessage: '' }; // Babel will do this initialization inside a constructor

  componentDidMount() {
    // Get user location
    window.navigator.geolocation.getCurrentPosition(
      // This can return two function callbacks
      position => {
        // Success callback
        this.setState({
          lat: position.coords.latitude
        }); // update with setState

        // never do this!!!
        // this statement makes react create a new state instead of updating the existing one
        // thereby, throwing an error
        // this.state.lat = position.coords.latitude
      },
      err => {
        // Faliure callback
        this.setState({
          errorMessage: err.message
        });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

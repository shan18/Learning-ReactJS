import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    // THIS IS THE ONLY TIME we do direct assignment to this.state
    this.state = { lat: null, errorMessage: '' };

    // Get user location
    window.navigator.geolocation.getCurrentPosition(
      // This can return two function callbacks
      position => {
        // Success callback
        this.setState({ lat: position.coords.latitude }); // update with setState

        // never do this!!!
        // this.state.lat = position.coords.latitude
      },
      err => {
        // Faliure callback
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

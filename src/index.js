import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    // Get user location
    window.navigator.geolocation.getCurrentPosition(
      // This can return two function callbacks
      position => console.log(position), // Success callback
      err => console.log(err) // Faliure callback
    );

    return <div>Latitude: </div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

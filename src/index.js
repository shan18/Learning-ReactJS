import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  // Get user location
  window.navigator.geolocation.getCurrentPosition(
    // This can return two function callbacks
    position => console.log(position), // Success callback
    err => console.log(err) // Faliure callback
  );

  return <div>Hi there.</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));

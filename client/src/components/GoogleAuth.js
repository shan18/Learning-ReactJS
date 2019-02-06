import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    // This has to be enabled in window scope after the component is rendered.
    // It will take some time to fetch data, so we provide a callback function
    // as the second argument which will execute after the data has been fetched.
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_API_CLIENT_ID,
        scope: 'email'
      });
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;

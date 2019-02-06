import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    // This has to be enabled in window scope after the component is rendered.
    // It will take some time to fetch data, so we provide a callback function
    // as the second argument which will execute after the data has been fetched.
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          // It will again take some time to initialize the client
          // It is an asynchronous operation and returns a promise
          clientId: process.env.REACT_APP_GOOGLE_API_CLIENT_ID,
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I don't know!</div>;
    } else if (this.state.isSignedIn) {
      return <div>signed in</div>;
    } else {
      return <div>not signed in</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;

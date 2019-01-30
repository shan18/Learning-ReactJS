import React from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';

class App extends React.Component {
  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: { q: term }
    });

    console.log(response);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onTermSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;

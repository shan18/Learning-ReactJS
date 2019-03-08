import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
  state = { language: 'english', color: 'primary' };

  onLanguageChange = language => {
    this.setState({ language });
  };

  onColorChange = color => {
    this.setState({ color });
  };

  render() {
    return (
      <div className="ui container">
        <LanguageSelector onLanguageChange={this.onLanguageChange} />

        <div>
          Select a button color:
          <button
            className="ui button primary"
            onClick={() => this.onColorChange('primary')}
          >
            Blue
          </button>
          <button
            className="ui button red"
            onClick={() => this.onColorChange('red')}
          >
            Red
          </button>
        </div>

        {/* It does not matter whether we wrap LanguageContext inside
        ColorContext or the other way around. We just have to wrap
        UserCreate inside both the Providers. */}
        <ColorContext.Provider value={this.state.color}>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;

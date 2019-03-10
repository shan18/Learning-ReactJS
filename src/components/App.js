import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';
import LanguageSelector from './LanguageSelector';
import ButtonColorSelector from './ButtonColorSelector';

class App extends React.Component {
  state = { color: 'primary' };

  onColorChange = color => {
    this.setState({ color });
  };

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />

          <ButtonColorSelector onColorChange={this.onColorChange} />

          {/* It does not matter whether we wrap LanguageContext inside
          ColorContext or the other way around. We just have to wrap
          UserCreate inside both the Providers. */}
          <ColorContext.Provider value={this.state.color}>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;

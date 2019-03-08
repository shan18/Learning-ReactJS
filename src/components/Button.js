import React from 'react';
import LanguageContext from '../context/LanguageContext';

class Button extends React.Component {
  // The variable name should be contextType
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return <button className="ui button primary">{text}</button>;
  }
}

export default Button;

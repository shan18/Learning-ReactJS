import React from 'react';
import LanguageContext from '../context/LanguageContext';

class Field extends React.Component {
  // The variable name should be contextType
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Name' : 'Naam';
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;

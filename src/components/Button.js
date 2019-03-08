import React from 'react';
import LanguageContext from '../context/LanguageContext';

class Button extends React.Component {
  // The variable name should be contextType
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return <button className="ui button primary">Submit</button>;
  }
}

export default Button;

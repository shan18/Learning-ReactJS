import React from 'react';

// We always use a captial letter for naming components
// because if we use all lower case letters and write some
// JSX with that component then React will think of the component
// tag as some vanilla HTML tag.
const Context = React.createContext('english'); // Providing a default value of 'english'

export class LanguageStore extends React.Component {
  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {/* We need to wrap all the components inside the Context.Provider so that they can
        access the context data.
        Context.Provider tag cannot be used in multiple places because each instance will
        create a new pipeline. Thus, we need to wrap all the components inside Context.Provider
        in a single place.
        props.children will contain all the components that have been wrapped
        around LanguageStore in other components.
        Thus, by wrapping props.children inside Context.Provider, we can wrap all the
        components in a single place. */}
        {this.props.children}
      </Context.Provider>
    );
  }
}

// LanguageStore is exported because we had to wrap all the components inside
// the Context.Provider.
// Context is exported so that the wrapped components could access or change
// the data in store.
export default Context;

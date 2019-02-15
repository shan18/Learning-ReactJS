import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput({ input }) {
    // the object sent as the parameter to this function
    // is given by the redux-form package
    // and contains various required configuration properties
    return <input {...input} />;
  }

  render() {
    console.log(this.props);
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
  // reduxForm replaces the connect() function and
  // receives only a single object as a parameter.
  // It passes several bult-in props to the component.
  form: 'streamCreate' // key-name under which the data will be stored in store
})(StreamCreate);

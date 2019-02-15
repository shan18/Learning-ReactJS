import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    // the object sent as the parameter to this function
    // is given by the redux-form package
    // and contains various required configuration properties
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  render() {
    return (
      <form className="ui form">
        {/*
          Whatever additional properties we specify in <Field /> automatically gets sent to
          the renderInput() function.
        */}
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
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

import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput({ input, label, meta }) {
    // the object sent as the parameter to this function
    // is given by the redux-form package
    // and contains various required configuration properties
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        <div>{meta.error}</div>
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      // The handleSubmit function takes care of event.preventDefault() as well as some other
      // functions and passes on the form field values to the callback function
      <form
        className="ui form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
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
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

// The object returend by this function will be automatically sent
// to the renderInput function
const validate = formValues => {
  // The key in the error object matches up with the 'name' of <Field />
  // to display an appropriate error message at the appropriate place
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }
  return errors;
};

export default reduxForm({
  // reduxForm replaces the connect() function and
  // receives only a single object as a parameter.
  // It passes several bult-in props to the component.
  form: 'streamCreate', // key-name under which the data will be stored in store
  validate
})(StreamCreate);

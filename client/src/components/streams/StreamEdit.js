import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  componentDidMount() {
    // If the edit page is loaded directly then the stream list
    // would not have been fetched by the app, so to ensure proper
    // working, every component must load its own data.
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          // initialValues will be a object with structure {title: '...', description: '...'}
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // The id of the required stream is inside the props
  // so ownProps param is used to fetch the props of the component
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);

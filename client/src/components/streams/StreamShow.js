import React from 'react';
import flv from 'flv.js'; // this packages fetches video from a server (like axios)
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);

    // this function is executed only once,
    // so if due to some reason, the stream is not
    // fetched, then the player will not be built.
    // So we need to use another lifecycle method
    // which runs whenever the component is updated.
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  // build video player for streaming
  buildPlayer() {
    if (this.player || !this.props.stream) {
      // do not build the player if it already exists or
      // if the stream hasn't been fetched yet
      return;
    }

    const { id } = this.props.match.params;
    this.player = flv.createPlayer({
      type: 'flv',
      // the stream name does not necessarily have to be the id of the stream
      // the name should match to the key-name we provide in OBS
      url: `http://localhost:8000/live/${id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.stream;
    return (
      <div>
        {/* controls attribute displays the video controls like pause e.t.c. */}
        <video ref={this.videoRef} style={{ width: '100%' }} controls />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamShow);

import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary">Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// The function can be named anything, it is named as
// 'mapStateToProps' by community convention
const mapStateToProps = state => {
  // this function takes in all the data present in Redux Store (state),
  // applies some configuration to it and converts the state into
  // props so that that it can be used in the component
  return { songs: state.songs }; // This object will be inside this.props in the component
};

export default connect(mapStateToProps)(SongList);

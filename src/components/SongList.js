import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  render() {
    console.log(this.props);
    return <div>SongList</div>;
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

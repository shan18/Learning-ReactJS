import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video }) => {
  return (
    <div className="video-item item">
      <img
        className="ui image"
        src={video.thumbnails.medium.url}
        alt={video.description}
      />
      <div className="content">
        <div className="header">{video.title}</div>
        <div className="description">{video.channelTitle}</div>
      </div>
    </div>
  );
};

export default VideoItem;

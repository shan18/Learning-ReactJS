import React from 'react';

const VideoItem = ({ video }) => {
  return (
    <div>
      <img src={video.thumbnails.medium.url} alt={video.description} />
      {video.title}
    </div>
  );
};

export default VideoItem;

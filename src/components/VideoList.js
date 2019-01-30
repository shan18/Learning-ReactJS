import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const videoItems = videos.map(video => {
    return <VideoItem key={video.id.videoId} video={video.snippet} />;
  });
  return <div>{videoItems}</div>;
};

export default VideoList;

import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const listOfVideos = videos.map(video => {
    return <VideoItem video={video} />;
  });
  return <div>{listOfVideos}</div>;
};
export default VideoList;

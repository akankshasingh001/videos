import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const listOfVideos = videos.map(video => {
    return <VideoItem video={video} />;
  });
  return <div className="ui relaxed divided list">{listOfVideos}</div>;
};
export default VideoList;

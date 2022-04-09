import axios from 'axios';

const KEY = 'AIzaSyBWTByogbYfVFnxtGXNxkC85DYyR3TVQvE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});

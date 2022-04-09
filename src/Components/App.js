import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../APIS/Youtube';
import VideoList from './VideoList';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  onTextSubmit = async text => {
    const response = await Youtube.get('/search', {
      params: {
        q: text
      }
    });

    this.setState({ videos: response.data.items });
  };
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTextSubmit} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;

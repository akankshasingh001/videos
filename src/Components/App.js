import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../APIS/Youtube';

class App extends React.Component {
  state = { videos: [] };
  onTextSubmit = async text => {
    const response = await Youtube.get('/search', {
      params: {
        q: text
      }
    });

    this.setState({ videos: response.data.item });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTextSubmit} />
      </div>
    );
  }
}

export default App;

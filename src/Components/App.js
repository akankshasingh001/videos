import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { searchTerm: '' };
  render() {
    return (
      <div className="ui container">
        <SearchBar />
      </div>
    );
  }
}

export default App;

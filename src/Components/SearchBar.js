import React from 'react';

class SearchBar extends React.Component {
  state = { searchText: '' };

  onFormSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.searchText}
              onChange={e => this.setState({ searchText: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

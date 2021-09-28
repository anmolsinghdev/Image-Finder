import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui segement">
        <form className="ui form">
          <div className="field">
            <label>Image-Search</label>
            <input type="text" placeholder="What You Want to Find?"></input>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;

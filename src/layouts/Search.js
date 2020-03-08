import React, { Component } from 'react';

class Search extends Component {
  state = {
    text: '',
  };

  render() {
    return (
      <div className="form">
        <input className="form__input" type="text" placeholder="Search for beer..."></input>
        <button className="form__btn">Search</button>
      </div>
    );
  }
}

export default Search;

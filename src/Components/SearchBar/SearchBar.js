import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = {
    input: '',
  };

  heandleInput = ({ currentTarget }) => {
    this.setState({ input: currentTarget.value });
  };

  heandleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.input);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.heandleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.heandleInput}
            value={this.state.input}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;

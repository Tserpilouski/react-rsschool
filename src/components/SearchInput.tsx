import React, { Component } from 'react';

interface SearchInputProps {
  onSearchChange: (search: string) => void;
  onSearchSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  searchValue: string;
}

class SearchInput extends Component<SearchInputProps> {
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    this.props.onSearchChange(value);
  };

  render() {
    return (
      <>
        <form onSubmit={this.props.onSearchSubmit}>
          <input
            type="text"
            value={this.props.searchValue}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </>
    );
  }
}

export default SearchInput;

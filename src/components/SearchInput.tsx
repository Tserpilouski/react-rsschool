import React, { Component } from 'react';

interface SearchInputState {
  search: string;
}

class SearchInput extends Component<object, SearchInputState> {
  constructor(props: object) {
    super(props);
    this.state = {
      search: '',
    };
  }

  componentDidMount() {
    const savedSearch = localStorage.getItem('search');
    if (savedSearch) {
      this.setState({ search: savedSearch });
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    this.setState({ search: value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.state.search);
    localStorage.setItem('search', this.state.search);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </>
    );
  }
}

export default SearchInput;

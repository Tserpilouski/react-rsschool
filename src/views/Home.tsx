import React, { Component } from 'react';
import SearchInput from '../components/SearchInput';
import Card from '../components/Card';
import Loader from '../components/Loader';
import { fetchSearchResults } from '../services/api';

interface HomeState {
  searchValue: string;
  results: { name: string; gender: string }[];
  isLoading: boolean;
  throwError: boolean;
}

class Home extends Component<object, HomeState> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchValue: '',
      results: [],
      isLoading: false,
      throwError: false,
    };
  }

  componentDidMount() {
    const searchValue = localStorage.getItem('search') || '';
    this.setState({ searchValue }, () => {
      this.performSearch(searchValue);
    });
  }

  performSearch = async (searchValue: string) => {
    this.setState({ isLoading: true });
    try {
      const response = await fetchSearchResults(searchValue);
      const results = response.results;
      if (Array.isArray(results)) {
        this.setState({ results });
      } else {
        console.error('Expected array but got:', results);
      }
    } catch (error) {
      console.error('Failed to fetch items:', error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSearchChange = (search: string) => {
    this.setState({ searchValue: search });
  };

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { searchValue } = this.state;
    localStorage.setItem('search', searchValue);
    this.performSearch(searchValue);
  };

  handleThrowError = () => {
    this.setState({ throwError: true });
  };

  render() {
    if (this.state.throwError) {
      throw new Error('Test error');
    }
    return (
      <>
        <div className="topOne">
          <h1>Top one</h1>
          <SearchInput
            onSearchChange={this.handleSearchChange}
            onSearchSubmit={this.handleSubmit}
            searchValue={this.state.searchValue}
          />
          <button onClick={this.handleThrowError}>Throw Error</button>
        </div>
        <div className="bottomOne">
          <h2>Second one</h2>
          <div className="cardbox">
            {this.state.isLoading ? (
              <Loader />
            ) : this.state.results.length > 0 ? (
              this.state.results.map((result, index) => (
                <Card key={index} name={result.name} gender={result.gender} />
              ))
            ) : (
              <p>No results found.</p>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Home;

import { Component } from 'react';
import SearchInput from '../components/SearchInput';
import Card from '../components/Card';

class Home extends Component {
  render() {
    return (
      <>
        <div className="topOne">
          <h1>Top one</h1>
          <SearchInput />
        </div>
        <div className="bottomOne">
          <h2>Second one</h2>
          <Card />
        </div>
      </>
    );
  }
}

export default Home;

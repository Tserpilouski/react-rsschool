import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchResult from './SearchResult';
import { BrowserRouter as Router } from 'react-router-dom';

describe('SearchResult Component', () => {
  it('should render without crashing', () => {
    const { container } = render(
      <Router>
        <SearchResult />
      </Router>
    );
    expect(container).toBeInTheDocument();
  });
});

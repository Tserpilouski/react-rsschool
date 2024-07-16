import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchInput from './SearchInput';
import { BrowserRouter as Router } from 'react-router-dom';

describe('SearchInput Component', () => {
  it('should render without crashing', () => {
    const { container } = render(
      <Router>
        <SearchInput />
      </Router>
    );
    expect(container).toBeInTheDocument();
  });
});

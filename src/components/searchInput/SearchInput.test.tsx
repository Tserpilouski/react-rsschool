import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchInput from './SearchInput';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '../../routes/ThemeProvider';

describe('SearchInput Component', () => {
  it('should render without crashing', () => {
    const { container } = render(
      <ThemeProvider>
        <Router>
          <SearchInput />
        </Router>
      </ThemeProvider>
    );
    expect(container).toBeInTheDocument();
  });
});

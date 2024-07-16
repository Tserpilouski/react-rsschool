import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import Home from './Home';

// Mock components that are imported in Home
vi.mock('../../components/searchInput/SearchInput', () => ({
  default: () => <div>Mocked SearchInput</div>,
}));

vi.mock('../../components/searchResult/SearchResult', () => ({
  default: () => <div>Mocked SearchResult</div>,
}));

describe('Home', () => {
  it('renders SearchInput, SearchResult, and Outlet', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    // Check if mocked components are rendered
    expect(screen.getByText('Mocked SearchInput')).toBeInTheDocument();
    expect(screen.getByText('Mocked SearchResult')).toBeInTheDocument();
  });

  it('renders hr and content div', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    // Check if hr and content div are rendered
    expect(screen.getByRole('separator')).toBeInTheDocument();
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });
});

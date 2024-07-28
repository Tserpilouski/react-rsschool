import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Home from './Home';

vi.mock('../../components/searchInput/SearchInput', () => ({
  default: () => <div>Mocked SearchInput</div>,
}));

vi.mock('../../components/searchResult/SearchResult', () => ({
  default: () => <div>Mocked SearchResult</div>,
}));

const mockStore = configureStore([]);
const store = mockStore({
  persons: {
    data: [], // Начальное состояние для persons
  },
});

describe('Home', () => {
  it('renders SearchInput, SearchResult, and Outlet', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText('Mocked SearchInput')).toBeInTheDocument();
    expect(screen.getByText('Mocked SearchResult')).toBeInTheDocument();
  });

  it('renders hr and content div', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByRole('separator')).toBeInTheDocument();
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });
});

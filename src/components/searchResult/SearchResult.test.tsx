import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchResult from './SearchResult';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { starwarsApi } from '../../service/starwars';

const store = configureStore({
  reducer: {
    [starwarsApi.reducerPath]: starwarsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(starwarsApi.middleware),
});

describe('SearchResult Component', () => {
  it('should render without crashing', () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <SearchResult />
        </Router>
      </Provider>
    );
    expect(container).toBeInTheDocument();
  });
});

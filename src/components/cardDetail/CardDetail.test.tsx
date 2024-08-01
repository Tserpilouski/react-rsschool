import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardDetail from './CardDetail';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { ThemeProvider } from '../../routes/ThemeProvider'; // путь к вашему ThemeProvider
import { starwarsApi } from '../../service/starwars'; // путь к вашему RTK Query API slice

// Настройка mock store с middleware RTK-Query
const store = configureStore({
  reducer: {
    [starwarsApi.reducerPath]: starwarsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(starwarsApi.middleware),
});

setupListeners(store.dispatch);

describe('CardDetail Component', () => {
  it('should render without crashing', () => {
    const { container } = render(
      <Provider store={store}>
        <ThemeProvider>
          <Router>
            <CardDetail />
          </Router>
        </ThemeProvider>
      </Provider>
    );
    expect(container).toBeInTheDocument();
  });
});

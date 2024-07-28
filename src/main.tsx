import React from 'react';
import ReactDOM from 'react-dom/client';

import './assets/styles/index.scss';
import ErrorBoundary from './components/errorboundary/ErrorBoundary.tsx';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';
import { ThemeProvider } from './routes/ThemeProvider.tsx';
import store from './store/store.ts';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider>
          <RouterProvider router={routes} />
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);

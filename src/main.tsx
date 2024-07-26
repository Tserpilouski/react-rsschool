import React from 'react';
import ReactDOM from 'react-dom/client';

import './assets/styles/index.scss';
import ErrorBoundary from './components/errorboundary/ErrorBoundary.tsx';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';
import { ThemeProvider } from './routes/ThemeProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

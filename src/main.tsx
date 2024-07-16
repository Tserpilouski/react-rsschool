import React from 'react';
import ReactDOM from 'react-dom/client';

import './assets/styles/index.scss';
import ErrorBoundary from './components/errorboundary/ErrorBoundary.tsx';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={routes} />
    </ErrorBoundary>
  </React.StrictMode>
);

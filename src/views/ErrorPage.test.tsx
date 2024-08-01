import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import ErrorPage from './ErrorPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as router from 'react-router-dom';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useRouteError: vi.fn(),
    isRouteErrorResponse: vi.fn(),
  };
});

describe('ErrorPage', () => {
  it('should display error details when there is a route error', async () => {
    const mockError = {
      status: 404,
      statusText: 'Not Found',
      data: {
        message: 'Page not found',
      },
    };

    (
      router.useRouteError as unknown as ReturnType<typeof vi.fn>
    ).mockReturnValue(mockError);
    (
      router.isRouteErrorResponse as unknown as ReturnType<typeof vi.fn>
    ).mockReturnValue(true);

    render(
      <Router>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    );

    expect(screen.getByText('Oops!')).toBeInTheDocument();
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Not Found')).toBeInTheDocument();
    expect(screen.getByText('Page not found')).toBeInTheDocument();
  });

  it('should display a generic error message when there is no route error', async () => {
    (
      router.useRouteError as unknown as ReturnType<typeof vi.fn>
    ).mockReturnValue(null);
    (
      router.isRouteErrorResponse as unknown as ReturnType<typeof vi.fn>
    ).mockReturnValue(false);

    render(
      <Router>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    );

    expect(screen.getByText('Oops!')).toBeInTheDocument();
  });
});

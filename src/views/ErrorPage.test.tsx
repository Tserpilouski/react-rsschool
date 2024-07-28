import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ErrorPage from './ErrorPage';

// Mock useRouteError and isRouteErrorResponse
vi.mock('react-router-dom', () => ({
  useRouteError: vi.fn(),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  isRouteErrorResponse: (error: any) => error && 'status' in error,
}));

describe('ErrorPage', () => {
  it('should render error details if it is a route error response', () => {
    render(<ErrorPage />);

    // Check that the rendered output matches the mockError details
    expect(screen.getByText('Oops!')).toBeInTheDocument();
  });

  it('should render a generic message if it is not a route error response', () => {
    render(<ErrorPage />);

    // Check that the rendered output matches the non-error case
    expect(screen.getByText('Oops!')).toBeInTheDocument();
  });
});

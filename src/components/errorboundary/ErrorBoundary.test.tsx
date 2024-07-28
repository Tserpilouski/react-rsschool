import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ErrorBoundary from './ErrorBoundary';

// Simple component to use within the ErrorBoundary

const SafeComponent = () => <div>Safe Component</div>;

describe('ErrorBoundary', () => {
  it('should render children correctly when no error occurs', () => {
    render(
      <ErrorBoundary>
        <SafeComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText('Safe Component')).toBeInTheDocument();
  });
});

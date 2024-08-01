// ThemeProvider.test.tsx
import React, { useContext } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ThemeProvider, ThemeContext } from './ThemeProvider';
import { ThemeContextProps } from '../views/home/Home.types';

const TestComponent: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextProps;

  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button onClick={() => setTheme('dark')}>Set Dark Theme</button>
    </div>
  );
};

describe('ThemeProvider', () => {
  it('should provide the default theme', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const themeElement = screen.getByTestId('theme');
    expect(themeElement).toHaveTextContent('light');
  });

  it('should update the theme when setTheme is called', async () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const themeElement = screen.getByTestId('theme');
    const button = screen.getByText('Set Dark Theme');

    fireEvent.click(button);

    await waitFor(() => {
      expect(themeElement).toHaveTextContent('dark');
    });
  });

  it('should add the correct class to the root element based on the theme', async () => {
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const button = screen.getByText('Set Dark Theme');

    expect(root.classList.contains('light-theme')).toBe(true);
    expect(root.classList.contains('dark-theme')).toBe(false);

    fireEvent.click(button);

    await waitFor(() => {
      expect(root.classList.contains('light-theme')).toBe(false);
      expect(root.classList.contains('dark-theme')).toBe(true);
    });

    document.body.removeChild(root);
  });
});

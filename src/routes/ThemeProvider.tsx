import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { ThemeContextProps, Theme } from '../views/home/Home.types';

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const root = document.getElementById('root');
    if (root) {
      root.classList.remove('light-theme', 'dark-theme');

      if (theme === 'dark') {
        root.classList.add('dark-theme');
      } else {
        root.classList.add('light-theme');
      }
    }

    return () => {
      if (root) {
        root.classList.remove('light-theme', 'dark-theme');
      }
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

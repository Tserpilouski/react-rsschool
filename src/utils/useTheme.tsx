import { useContext } from 'react';
import { ThemeContext } from '../routes/ThemeContext';
import { ThemeContextProps } from '../views/home/Home.types';

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

import { createContext } from 'react';
import { ThemeContextProps } from '../views/home/Home.types';

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

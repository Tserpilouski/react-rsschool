import { useState, useEffect } from 'react';

type ReturnType<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export const useLocalStorage = <T,>(
  key: string,
  initialValue: T
): ReturnType<T> => {
  const [state, setState] = useState<T>(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error('Error retrieving localStorage:', error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [key, state]);

  return [state, setState];
};

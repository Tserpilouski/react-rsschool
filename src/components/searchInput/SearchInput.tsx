import React, { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useLocalStorage } from '../../utils/useLocalStorage';

import styles from './searchinput.module.scss';
import { useTheme } from '../../utils/useTheme';

const SearchInput: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useLocalStorage('value', '');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);
    if (inputValue !== '') {
      params.set('search', inputValue);
    } else {
      params.delete('search');
    }
    params.set('page', '1');
    setSearchParams(params);
  };

  return (
    <div className={styles.topblock}>
      <input
        className={styles.inputc}
        type="search"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className={styles.buttonc} onClick={handleSearch}>
        Search
      </button>
      <div>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          {theme === 'light' ? 'dark' : 'light'}
        </button>
      </div>
    </div>
  );
};

export default SearchInput;

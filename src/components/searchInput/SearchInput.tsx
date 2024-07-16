import styles from './searchinput.module.scss';

import React, { ChangeEvent } from 'react';

import { useLocalStorage } from '../../utils/useLocalStorage';
import { useSearchParams } from 'react-router-dom';

const SearchInput: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useLocalStorage('value', '');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
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
      <button className={styles.buttonc} onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default SearchInput;

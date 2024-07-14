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
    const page = searchParams.get('page');
    console.log(page);
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

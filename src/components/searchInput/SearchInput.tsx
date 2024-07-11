import React from 'react';
import { useLocalStorage } from '../../utils/useLocalStorage';

import styles from './searchinput.module.scss';

interface SearchInputProps {
  onSearchSubmit: (searchText: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearchSubmit }) => {
  const [valueLS, setValueLS] = useLocalStorage('searchValue', '');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearchSubmit(valueLS);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.inputc}
        type="text"
        value={valueLS}
        onChange={(e) => setValueLS(e.target.value)}
      />
      <button className={styles.buttonc} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchInput;

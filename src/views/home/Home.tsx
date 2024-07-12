import React, { useEffect, useState } from 'react';

import SearchInput from '../../components/searchInput/SearchInput';
import Card from '../../components/card/Card';
import Loader from '../../components/loader/Loader';

import { useLocalStorage } from '../../utils/useLocalStorage';
import { fetchSearchResults } from '../../api/api';

import { CardInfo } from './Home.types';

import styles from './home.module.scss';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<CardInfo[]>([]);
  const [valueLS, setValueLS] = useLocalStorage('searchValue', '');
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);

  const handleSubmit = (searchText: string) => {
    setValueLS(searchText);
  };

  const performSearch = async (
    query: string,
    next: string | null,
    prev: string | null
  ) => {
    setIsLoading(true);
    try {
      const response = await fetchSearchResults(query, next, prev);
      setResult(response.results);
      setNextPage(response.next);
      setPrevPage(response.previous);
    } catch (error) {
      console.error('Failed to fetch items:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const goToNextPage = () => {
    performSearch(valueLS, nextPage, null);
  };

  const goToPrevPage = () => {
    performSearch(valueLS, null, prevPage);
  };

  useEffect(() => {
    performSearch(valueLS, nextPage, prevPage);
  }, [valueLS]);

  return (
    <>
      <div className={styles.topblock}>
        <SearchInput onSearchSubmit={handleSubmit} />
      </div>
      <hr />
      <div className={styles.bottomblock}>
        {isLoading ? (
          <Loader />
        ) : result.length > 0 ? (
          <div className={styles.gridBox}>
            {result.map((character, index) => (
              <div key={index} className={styles.gridItem}>
                <Card cardInfo={character} />
              </div>
            ))}
          </div>
        ) : (
          <p>No results found.</p>
        )}
      </div>
      <div className={styles.pagination}>
        <button onClick={goToPrevPage} disabled={!prevPage}>
          Previous
        </button>
        <button onClick={goToNextPage} disabled={!nextPage}>
          Next
        </button>
      </div>
    </>
  );
};

export default Home;

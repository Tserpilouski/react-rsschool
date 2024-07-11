import { useEffect, useState } from 'react';

import SearchInput from '../../components/searchInput/SearchInput';
import Card from '../../components/card/Card';
import Loader from '../../components/loader/Loader';

import { useLocalStorage } from '../../utils/useLocalStorage';
import { fetchSearchResults } from '../../api/api';

import styles from './home.module.scss';

interface ResultItem {
  name: string;
  gender: string;
}

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<ResultItem[]>([]);
  const [valueLS, setValueLS] = useLocalStorage('searchValue', '');

  const handleSubmit = (searchText: string) => {
    setValueLS(searchText);
    performSearch(searchText);
  };

  const performSearch = async (searchValue: string) => {
    setIsLoading(true);
    try {
      const response = await fetchSearchResults(searchValue);
      const results = response.results;
      if (Array.isArray(results)) {
        setResult(results);
      } else {
        console.error('Expected array but got:', results);
      }
    } catch (error) {
      console.error('Failed to fetch items:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    performSearch(valueLS);
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
          result.map((result, index) => (
            <Card key={index} name={result.name} gender={result.gender} />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </>
  );
};

export default Home;

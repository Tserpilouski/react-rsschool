import React, { useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import SearchInput from '../../components/searchInput/SearchInput';
import SearchResult from '../../components/searchResult/SearchResult';

import styles from './home.module.scss';

const Home: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log('page', searchParams.get('page'));
  useEffect(() => {
    setSearchParams('page=1');
  }, []);

  return (
    <div>
      <SearchInput />
      <hr />
      <div className={styles.content}>
        <SearchResult />
        <div className={styles.details}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;

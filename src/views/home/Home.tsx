import React from 'react';
import { Outlet } from 'react-router-dom';
import SearchInput from '../../components/searchInput/SearchInput';
import SearchResult from '../../components/searchResult/SearchResult';
import ActionMenu from '../../components/actionMenu/ActionMenu';

import styles from './home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={styles.box}>
      <SearchInput />
      <hr />
      <div className={styles.content} data-testid="content">
        <SearchResult />
        <Outlet />
      </div>
      <ActionMenu />
    </div>
  );
};

export default Home;

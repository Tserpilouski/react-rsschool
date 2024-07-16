import { Outlet } from 'react-router-dom';
import SearchInput from '../../components/searchInput/SearchInput';
import SearchResult from '../../components/searchResult/SearchResult';

import styles from './home.module.scss';

const Home: React.FC = () => {
  return (
    <div>
      <SearchInput />
      <hr />
      <div className={styles.content}>
        <SearchResult />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;

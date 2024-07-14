import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import Pagination from '../pagination/Pagination';

import styles from './searchResult.module.scss';
import { getAllPersons } from '../../api/api';
import { Data } from '../../views/home/Home.types';

const SearchResult: React.FC = () => {
  const [data, setData] = useState<Data>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await getAllPersons('l', '1');
        setData(results);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch search results:', error);
      }
    };

    fetchData();
  }, []);
  console.log(data);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.bottomblock}>
      <div className={styles.gridBox}>
        {data.map((character, index) => (
          <div key={index} className={styles.gridItem}>
            <Card cardInfo={character} />
          </div>
        ))}
      </div>
      <Pagination next={data.next} previous={data.previous} />
    </div>
  );
};

export default SearchResult;

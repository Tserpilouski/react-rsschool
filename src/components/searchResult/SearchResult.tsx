import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import Pagination from '../pagination/Pagination';

import styles from './searchResult.module.scss';
import { getApi } from '../../api/api';
import { PersonInfo } from '../../views/home/Home.types';
import { useLocation, useSearchParams } from 'react-router-dom';

const SearchResult: React.FC = () => {
  const { pathname } = useLocation();
  const [data, setData] = useState<PersonInfo[]>([]);
  const [next, setNext] = useState<string | null>(null);
  const [previous, setPrevious] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const search = searchParams.get('search') || '';
        const page = searchParams.get('page') || '1';
        setCurrentPage(Number(page));
        const response = await getApi(search, page);
        setData(response.results);
        setNext(response.next);
        setPrevious(response.previous);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [searchParams]);

  const goToPrevPage = () => {
    if (previous != null) {
      setCurrentPage((prev) => prev - 1);
      updatePageParams(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (next != null) {
      setCurrentPage((prev) => prev + 1);
      updatePageParams(currentPage + 1);
    }
  };

  function updatePageParams(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    setSearchParams(params);
  }

  return (
    <>
      {isLoading === true ? (
        <div className={styles.bottomblock__width}>
          <h1>Loading....</h1>
        </div>
      ) : (
        <div className={styles.bottomblock__width}>
          <div
            className={pathname != '/' ? styles.gridBoxDetail : styles.gridBox}
          >
            {data.map((character, index) => (
              <div key={index} className={styles.gridItem}>
                <Card cardInfo={character} />
              </div>
            ))}
          </div>
          <Pagination
            next={goToNextPage}
            previous={goToPrevPage}
            currentPage={currentPage}
          />
        </div>
      )}
    </>
  );
};

export default SearchResult;

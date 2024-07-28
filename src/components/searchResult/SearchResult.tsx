import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import Card from '../card/Card';
import Pagination from '../pagination/Pagination';

import { starwarsApi } from '../../service/starwars';

import styles from './searchResult.module.scss';

const SearchResult: React.FC = () => {
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || 1);
  const name = searchParams.get('search') || '';
  const [currentPage, setCurrentPage] = useState(page);
  const [next, setNext] = useState<string | null>(null);
  const [previous, setPrevious] = useState<string | null>(null);

  const { data, isLoading, isFetching } = starwarsApi.useGetPersonByNameQuery({
    name: name,
    numPage: page,
  });

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  useEffect(() => {
    if (data) {
      setNext(data.next);
      setPrevious(data.previous);
    }
  }, [data]);

  const prevPage = () => {
    if (previous != null) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      updatePageParams(newPage);
    }
  };

  const nextPage = () => {
    if (next != null) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      updatePageParams(newPage);
    }
  };

  function updatePageParams(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    setSearchParams(params);
  }

  return (
    <>
      {isLoading && isFetching ? (
        <div className={styles.bottomblock__width}>
          <h1>Loading....</h1>
        </div>
      ) : (
        <div className={styles.bottomblock__width}>
          <div
            className={pathname != '/' ? styles.gridBoxDetail : styles.gridBox}
          >
            {data?.results?.map((character, index) => (
              <div key={index} className={styles.gridItem}>
                <Card cardInfo={character} />
              </div>
            ))}
          </div>
          <Pagination
            next={nextPage}
            previous={prevPage}
            currentPage={currentPage}
          />
        </div>
      )}
    </>
  );
};

export default SearchResult;

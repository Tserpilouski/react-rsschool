import React from 'react';
import { RefObject, useRef } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useClickOutside from '../../utils/useClickOutside';

import style from './carddetail.module.scss';
import { starwarsApi } from '../../service/starwars';

const CardDetail = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const { card } = useParams<string>();
  const cardId = card || '';
  const { data, isLoading, isFetching } =
    starwarsApi.useGetPersonByIdQuery(cardId);
  const wrap: RefObject<HTMLDivElement> = useRef(null);

  const handleClickOutside = (): void => {
    navigate(`/${search}`);
  };

  useClickOutside(wrap, handleClickOutside);

  return (
    <>
      {isLoading && isFetching ? (
        <div className={style.card}>
          <h1>Loading....</h1>
        </div>
      ) : (
        <div ref={wrap} className={style.card}>
          <button onClick={handleClickOutside}>Close</button>
          <h2>{data?.name}</h2>
          <span>Year: {data?.birth_year}</span>
          <span>Eye color: {data?.eye_color}</span>
          <span>Mass: {data?.mass}</span>
          <span>Height: {data?.height}</span>
        </div>
      )}
    </>
  );
};

export default CardDetail;

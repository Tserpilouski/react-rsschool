import { RefObject, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getApiPerson } from '../../api/api';
import { PersonInfo } from '../../views/home/Home.types';
import useClickOutside from '../../utils/useClickOutside';

import style from './carddetail.module.scss';

const CardDetail = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const { card } = useParams<string>();
  const [detail, setDetail] = useState<PersonInfo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const wrap: RefObject<HTMLDivElement> = useRef(null);

  const handleClickOutside = (): void => {
    navigate(`/${search}`);
  };

  useClickOutside(wrap, handleClickOutside);

  useEffect(() => {
    const getPersonInfo = async () => {
      try {
        setIsLoading(true);
        const person = await getApiPerson(card);
        setDetail(person);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      } finally {
        setIsLoading(false);
      }
    };
    getPersonInfo();
  }, [card]);

  return (
    <>
      {isLoading === true ? (
        <div className={style.card}>
          <h1>Loading....</h1>
        </div>
      ) : (
        <div ref={wrap} className={style.card}>
          <button onClick={handleClickOutside}>Close</button>
          <h2>{detail?.name}</h2>
          <span>Year: {detail?.birth_year}</span>
          <span>Eye color: {detail?.eye_color}</span>
          <span>Mass: {detail?.mass}</span>
          <span>Height: {detail?.height}</span>
        </div>
      )}
    </>
  );
};

export default CardDetail;

import React from 'react';
import style from './card.module.scss';

import { PersonInfo } from '../../views/home/Home.types';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getNavigatedUrl } from '../../utils/getNavigatedUrl';

interface CardProps {
  cardInfo: PersonInfo;
}

const Card: React.FC<CardProps> = ({ cardInfo }) => {
  const navigate = useNavigate();
  const id = extractIdFromUrl(cardInfo.url);
  const [searchParams] = useSearchParams();

  function extractIdFromUrl(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2];
  }

  const handleClick = () => {
    const url = getNavigatedUrl(searchParams, id);
    navigate(url);
  };

  return (
    <div className={style.card} onClick={handleClick}>
      <img
        className={style.img}
        src={`/people/${id}.jpg`}
        alt={`Photo of ${cardInfo.name}`}
      />
      <span>Name: {cardInfo.name}</span>
      <span>Gender: {cardInfo.gender}</span>
    </div>
  );
};

export default Card;

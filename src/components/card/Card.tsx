import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { PersonInfo } from '../../views/home/Home.types';
import { getNavigatedUrl } from '../../utils/getNavigatedUrl';
import { useTheme } from '../../utils/useTheme';

import style from './card.module.scss';

interface CardProps {
  cardInfo: PersonInfo;
}

const Card: React.FC<CardProps> = ({ cardInfo }) => {
  const navigate = useNavigate();
  const id = extractIdFromUrl(cardInfo.url);
  const [searchParams] = useSearchParams();
  const { theme } = useTheme();

  const cardTheme = theme === 'light' ? `${style.light}` : '';

  function extractIdFromUrl(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2];
  }

  const handleClick = () => {
    const url = getNavigatedUrl(searchParams, id);
    navigate(url);
  };

  return (
    <div className={`${style.card} ${cardTheme}`} onClick={handleClick}>
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

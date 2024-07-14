import React from 'react';
import style from './card.module.scss';

import { PersonInfo } from '../../views/home/Home.types';
import { useParams } from 'react-router-dom';

interface CardProps {
  cardInfo: PersonInfo;
}

const Card: React.FC<CardProps> = ({ cardInfo }) => {
  const id = extractIdFromUrl(cardInfo.url);
  const page = useParams();

  function extractIdFromUrl(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2];
  }
  const handleClick = () => {
    console.log(page);
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

import React from 'react';
import style from './card.module.scss';

import { CardInfo } from '../../views/home/Home.types';

interface CardProps {
  cardInfo: CardInfo;
}

const Card: React.FC<CardProps> = ({ cardInfo }) => {
  const id = extractIdFromUrl(cardInfo.url);

  function extractIdFromUrl(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2];
  }

  return (
    <div className={style.card}>
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

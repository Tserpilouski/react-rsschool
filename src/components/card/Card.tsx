import React from 'react';
import style from './card.module.scss';

interface CardProps {
  name: string;
  gender: string;
}

const Card: React.FC<CardProps> = ({ name, gender }) => {
  return (
    <div className={style.card}>
      <span>Name: {name}</span>
      <span>Gender: {gender}</span>
    </div>
  );
};

export default Card;

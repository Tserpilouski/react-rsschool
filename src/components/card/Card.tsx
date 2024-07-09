import React from 'react';
import styles from './card.module.css';

interface CardProps {
  name: string;
  gender: string;
}

const Card: React.FC<CardProps> = ({ name, gender }) => {
  return (
    <div className={styles.card}>
      <span>Name: {name}</span>
      <span>Gender: {gender}</span>
    </div>
  );
};

export default Card;

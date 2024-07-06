import { Component } from 'react';
import styles from './card.module.css';

interface CardProps {
  name: string;
  gender: string;
}

class Card extends Component<CardProps> {
  render() {
    const { name, gender } = this.props;
    return (
      <div className={styles.card}>
        <span>Name: {name}</span>
        <span>Gender: {gender}</span>
      </div>
    );
  }
}

export default Card;

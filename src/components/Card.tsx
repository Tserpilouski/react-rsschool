import { Component } from 'react';
import styles from './card.module.css';

class Card extends Component {
  render() {
    return (
      <div className={styles.card}>
        <span>Hello</span>
        <p>Some tekst</p>
      </div>
    );
  }
}

export default Card;

import React from 'react';
import styles from './pagination.module.scss';

interface Props {
  next: () => void;
  previous: () => void;
  currentPage: number;
}

const Pagination: React.FC<Props> = ({ next, previous, currentPage }) => {
  return (
    <div className={styles.box}>
      <button className={styles.btn} onClick={previous}>
        prev
      </button>
      <span>Page {currentPage}</span>
      <button className={styles.btn} onClick={next}>
        next
      </button>
    </div>
  );
};

export default Pagination;

import React, { useState } from 'react';

import styles from './pagination.module.scss';

interface Props {
  next: string | null;
  previous: string | null;
}

const Pagination: React.FC<Props> = ({ next, previous }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPrevPage = () => {
    if (previous != null) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToNextPage = () => {
    if (next != null) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className={styles.box}>
      <button
        className={styles.btn}
        onClick={goToPrevPage}
        disabled={!previous}
      >
        prev
      </button>
      <span>Page {currentPage}</span>
      <button className={styles.btn} onClick={goToNextPage} disabled={!next}>
        next
      </button>
    </div>
  );
};

export default Pagination;

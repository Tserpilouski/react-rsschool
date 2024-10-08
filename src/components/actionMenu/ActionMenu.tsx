import React, { useEffect, useState } from 'react';
import { clearData } from '../../store/slices/personsSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { useDownloadCsv } from '../../utils/useDownloadCSV';

import style from './actionmenu.module.scss';

const ActionMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const data = useAppSelector((state) => state.persons.data);
  const selectedCardsCount = useAppSelector(
    (state) => state.persons.data.length
  );
  const { url, fileName } = useDownloadCsv(data);

  const handleDelete = () => {
    dispatch(clearData());
  };

  useEffect(() => {
    if (selectedCardsCount > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [selectedCardsCount]);

  return (
    <>
      {isVisible && (
        <div className={style.container}>
          <span>{selectedCardsCount} person selected</span>
          {url?.length && fileName?.length && (
            <a
              href={url}
              download={fileName}
              className="btn btn--dark"
              onClick={handleDelete}
            >
              Download
            </a>
          )}
          <button onClick={handleDelete}>Unselect all</button>
        </div>
      )}
    </>
  );
};

export default ActionMenu;

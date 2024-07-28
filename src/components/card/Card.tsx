import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { PersonInfo } from '../../views/home/Home.types';
import { getNavigatedUrl } from '../../utils/getNavigatedUrl';
import { useTheme } from '../../utils/useTheme';
import { addPerson, removePerson } from '../../store/slices/personsSlice';

import style from './card.module.scss';

interface CardProps {
  cardInfo: PersonInfo;
}

const Card: React.FC<CardProps> = ({ cardInfo }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const selectedCards = useSelector((state: RootState) => state.persons.data);

  const isChecked = selectedCards.some((card) => card.url === cardInfo.url);

  const cardTheme = theme === 'light' ? `${style.light}` : '';

  const handleClick = () => {
    const id = extractIdFromUrl(cardInfo.url);
    const url = getNavigatedUrl(searchParams, id);
    navigate(url);
  };

  function extractIdFromUrl(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2];
  }

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      dispatch(addPerson(cardInfo));
    } else {
      dispatch(removePerson({ url: cardInfo.url }));
    }
  };

  return (
    <div className={`${style.card} ${cardTheme}`} onClick={handleClick}>
      <img
        className={style.img}
        src={`/people/${extractIdFromUrl(cardInfo.url)}.jpg`}
        alt={`Photo of ${cardInfo.name}`}
      />
      <span>Name: {cardInfo.name}</span>
      <span>Gender: {cardInfo.gender}</span>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default Card;

import { useLoaderData } from 'react-router-dom';
import { PersonInfo } from '../../views/home/Home.types';

const CardDetail = () => {
  const person = useLoaderData() as PersonInfo;

  return (
    <div>
      <h1>{person.name}</h1>
      <h1>{person.eye_color}</h1>
    </div>
  );
};

export default CardDetail;

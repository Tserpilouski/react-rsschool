import React, { useState, useEffect } from 'react';

interface Character {
  name: string;
  gender: string;
}

interface SWAPIResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
}

const Pagination: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);

  useEffect(() => {
    fetchData('https://swapi.dev/api/people/');
  }, []);

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: SWAPIResponse = await response.json();
      setCharacters(data.results);
      setNextPage(data.next);
      setPrevPage(data.previous);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const goToNextPage = () => {
    if (nextPage) {
      fetchData(nextPage);
    }
  };

  const goToPrevPage = () => {
    if (prevPage) {
      fetchData(prevPage);
    }
  };

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>
            {character.name} - {character.gender}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={goToPrevPage} disabled={!prevPage}>
          Previous
        </button>
        <button onClick={goToNextPage} disabled={!nextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;

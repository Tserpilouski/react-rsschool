export const fetchSearchResults = async (query: string) => {
  try {
    const url = query
      ? `https://swapi.dev/api/people/?search=${query}`
      : `https://swapi.dev/api/people/`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch search results:', error);
    throw error;
  }
};

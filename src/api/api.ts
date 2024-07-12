export const fetchSearchResults = async (
  query: string,
  next: string | null,
  prev: string | null
) => {
  try {
    let url = 'https://swapi.dev/api/people/';

    if (query) {
      url += `?search=${query}`;
    } else if (next) {
      url = next;
    } else if (prev) {
      url = prev;
    }

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

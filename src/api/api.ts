export const getAllPersons = async (search: string | null, page: string) => {
  let url = `https://swapi.dev/api/people/`;

  if (search && page) {
    url = `${url}?search=${search}&page=${page}`;
  } else {
    url = `${url}?page=${page}`;
  }

  try {
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

export const getPerson = async (id: string) => {
  try {
    const url = `https://swapi.dev/api/people/${id}/`;
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

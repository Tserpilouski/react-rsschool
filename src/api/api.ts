import { Data, PersonInfo } from '../views/home/Home.types';

export async function getApi(search: string, page: string): Promise<Data> {
  const url = `https://swapi.dev/api/people/?search=${search}&page=${page}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    const { count, next, previous, results } = json;
    return { count, next, previous, results };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getApiPerson(
  id: string | undefined
): Promise<PersonInfo> {
  const url = `https://swapi.dev/api/people/${id}/`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

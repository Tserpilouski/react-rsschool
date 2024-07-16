export interface PersonInfo {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

export type Data = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PersonInfo[] | [];
};

export type LoaderData = {
  response: Data;
};

export type Person = {
  person: PersonInfo;
};

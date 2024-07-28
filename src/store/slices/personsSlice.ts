import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PersonInfo {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface State {
  data: PersonInfo[];
}

const initialState: State = {
  data: [],
};

export const personsSlice = createSlice({
  name: 'persons',
  initialState,
  reducers: {
    addPerson: (state, { payload }: PayloadAction<PersonInfo>) => {
      state.data = [...state.data, payload];
    },
    removePerson: (state, { payload }: PayloadAction<{ url: string }>) => {
      state.data = state.data.filter((i) => i.url !== payload.url);
    },
    clearData: (state) => {
      state.data = [];
    },
  },
});

export const { addPerson, removePerson, clearData } = personsSlice.actions;
export default personsSlice.reducer;

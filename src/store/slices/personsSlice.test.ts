import { describe, it, expect, beforeEach } from 'vitest';
import { configureStore } from '@reduxjs/toolkit';
import personsReducer, {
  addPerson,
  removePerson,
  clearData,
  PersonInfo,
} from './personsSlice';

// Создаем тестовое хранилище
const createTestStore = () => {
  return configureStore({
    reducer: {
      persons: personsReducer,
    },
  });
};

// Тестируем store
describe('store', () => {
  let testStore: ReturnType<typeof createTestStore>;

  beforeEach(() => {
    testStore = createTestStore(); // используем тестовое хранилище
  });

  it('should initialize with empty persons data', () => {
    const state = testStore.getState();
    expect(state.persons.data).toHaveLength(0);
  });

  it('should handle addPerson action', () => {
    const personToAdd: PersonInfo = {
      name: 'Darth Vader',
      height: '202',
      mass: '136',
      hair_color: 'none',
      skin_color: 'white',
      eye_color: 'yellow',
      birth_year: '41.9BBY',
      gender: 'male',
      homeworld: 'Tatooine',
      films: ['A New Hope'],
      species: ['Human'],
      vehicles: ['TIE Advanced x1'],
      starships: ['TIE Advanced x1'],
      created: '2014-12-10T16:56:29.374000Z',
      edited: '2014-12-20T21:17:50.315000Z',
      url: 'http://swapi.dev/api/people/4/',
    };

    testStore.dispatch(addPerson(personToAdd));
    const state = testStore.getState();
    expect(state.persons.data).toContainEqual(personToAdd);
  });

  it('should handle removePerson action', () => {
    const personToAdd: PersonInfo = {
      name: 'Darth Vader',
      height: '202',
      mass: '136',
      hair_color: 'none',
      skin_color: 'white',
      eye_color: 'yellow',
      birth_year: '41.9BBY',
      gender: 'male',
      homeworld: 'Tatooine',
      films: ['A New Hope'],
      species: ['Human'],
      vehicles: ['TIE Advanced x1'],
      starships: ['TIE Advanced x1'],
      created: '2014-12-10T16:56:29.374000Z',
      edited: '2014-12-20T21:17:50.315000Z',
      url: 'http://swapi.dev/api/people/4/',
    };

    testStore.dispatch(addPerson(personToAdd));
    testStore.dispatch(removePerson({ url: personToAdd.url }));
    const state = testStore.getState();
    expect(state.persons.data).not.toContainEqual(personToAdd);
  });

  it('should handle clearData action', () => {
    const personToAdd: PersonInfo = {
      name: 'Darth Vader',
      height: '202',
      mass: '136',
      hair_color: 'none',
      skin_color: 'white',
      eye_color: 'yellow',
      birth_year: '41.9BBY',
      gender: 'male',
      homeworld: 'Tatooine',
      films: ['A New Hope'],
      species: ['Human'],
      vehicles: ['TIE Advanced x1'],
      starships: ['TIE Advanced x1'],
      created: '2014-12-10T16:56:29.374000Z',
      edited: '2014-12-20T21:17:50.315000Z',
      url: 'http://swapi.dev/api/people/4/',
    };

    testStore.dispatch(addPerson(personToAdd));
    testStore.dispatch(clearData());
    const state = testStore.getState();
    expect(state.persons.data).toHaveLength(0);
  });
});

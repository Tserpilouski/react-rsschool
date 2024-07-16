import { expect, it, describe, vi, beforeEach } from 'vitest';
import { getApi, getApiPerson } from './api';
import { Data, PersonInfo } from '../views/home/Home.types';

describe('API functions', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  describe('getApi', () => {
    it('should fetch data successfully', async () => {
      const mockData: Data = {
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            name: 'Luke Skywalker',
            height: '172',
            mass: '77',
            hair_color: 'blond',
            skin_color: 'fair',
            eye_color: 'blue',
            birth_year: '19BBY',
            gender: 'male',
            created: '2014-12-09T13:50:51.644000Z',
            edited: '2014-12-20T21:17:56.891000Z',
            homeworld: 'https://swapi.dev/api/planets/1/',
            films: [],
            species: [],
            starships: [],
            vehicles: [],
            url: 'https://swapi.dev/api/people/1/',
          },
        ],
      };

      global.fetch = vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockData),
        })
      ) as unknown as typeof fetch;

      const data = await getApi('Luke', '1');
      expect(data).toEqual(mockData);
    });

    it('should handle errors', async () => {
      global.fetch = vi.fn(() =>
        Promise.resolve({
          ok: false,
          status: 500,
          statusText: 'Internal Server Error',
        })
      ) as unknown as typeof fetch;

      await expect(getApi('Luke', '1')).rejects.toThrow('Response status: 500');
    });
  });

  describe('getApiPerson', () => {
    it('should fetch person data successfully', async () => {
      const mockPerson: PersonInfo = {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: '19BBY',
        gender: 'male',
        created: '2014-12-09T13:50:51.644000Z',
        edited: '2014-12-20T21:17:56.891000Z',
        homeworld: 'https://swapi.dev/api/planets/1/',
        films: [],
        species: [],
        starships: [],
        vehicles: [],
        url: 'https://swapi.dev/api/people/1/',
      };

      global.fetch = vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockPerson),
        })
      ) as unknown as typeof fetch;

      const person = await getApiPerson('1');
      expect(person).toEqual(mockPerson);
    });

    it('should handle errors', async () => {
      global.fetch = vi.fn(() =>
        Promise.resolve({
          ok: false,
          status: 404,
          statusText: 'Not Found',
        })
      ) as unknown as typeof fetch;

      await expect(getApiPerson('1')).rejects.toThrow('Response status: 404');
    });
  });
});

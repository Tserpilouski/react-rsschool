import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Response, PersonInfo } from './type.type';
import { BASE_URL } from '../constants/constants';

export const starwarsApi = createApi({
  reducerPath: 'starwarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPersonByName: builder.query<Response, { name: string; numPage: number }>(
      {
        query: ({ name, numPage }) => ({
          url: `people/`,
          params: {
            search: name,
            page: numPage,
          },
        }),
      }
    ),
    getPersonById: builder.query<PersonInfo, string>({
      query: (id) => ({
        url: `people/${id}/`,
      }),
    }),
  }),
});

// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { starwarsApi } from '../service/starwars';
import personsReducer from './slices/personsSlice';

const store = configureStore({
  reducer: {
    [starwarsApi.reducerPath]: starwarsApi.reducer,
    persons: personsReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(starwarsApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

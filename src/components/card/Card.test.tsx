import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { describe, it, expect, vi, MockedFunction } from 'vitest';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Card from './Card';
import { PersonInfo } from '../../views/home/Home.types';
import { getNavigatedUrl } from '../../utils/getNavigatedUrl';
import { ThemeProvider } from '../../routes/ThemeProvider';

vi.mock('../../utils/getNavigatedUrl', () => ({
  getNavigatedUrl: vi.fn(() => '/mocked-url'),
}));

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: vi.fn(),
    useSearchParams: vi.fn(() => [new URLSearchParams()]),
  };
});

const mockStore = configureStore([]);
const store = mockStore({
  persons: {
    data: [], // Начальное состояние для persons
  },
});

describe('Card', () => {
  const cardInfo: PersonInfo = {
    name: 'John Doe',
    gender: 'male',
    url: 'https://example.com/api/people/1/',
    birth_year: '19BBY',
    created: '2023-01-01T00:00:00Z',
    edited: '2023-01-01T00:00:00Z',
    eye_color: 'blue',
    hair_color: 'blond',
    height: '172',
    mass: '77',
    skin_color: 'fair',
    homeworld: 'https://example.com/api/planets/1/',
    films: ['https://example.com/api/films/1/'],
    species: [],
    starships: [],
    vehicles: [],
  };

  it('renders the card with person information', () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <BrowserRouter>
            <Card cardInfo={cardInfo} />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );

    expect(screen.getByText('Name: John Doe')).toBeInTheDocument();
    expect(screen.getByText('Gender: male')).toBeInTheDocument();
  });

  it('navigates to the correct URL on card click', () => {
    const navigate = vi.fn();
    (
      useNavigate as unknown as MockedFunction<typeof useNavigate>
    ).mockReturnValue(navigate);

    render(
      <Provider store={store}>
        <ThemeProvider>
          <BrowserRouter>
            <Card cardInfo={cardInfo} />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );

    fireEvent.click(screen.getByText('Name: John Doe'));

    expect(getNavigatedUrl).toHaveBeenCalledWith(expect.anything(), '1');
    expect(navigate).toHaveBeenCalledWith('/mocked-url');
  });
});

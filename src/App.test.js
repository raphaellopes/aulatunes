import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import api from './services/itunes';
import { albums, songs } from './__mocks__/apiData';

import App from './App';

const mockCall = () => {
  api.get
    .mockResolvedValueOnce({
      data: {
        feed: {
          entry: albums,
        },
      },
    })
    .mockResolvedValueOnce({
      data: {
        feed: {
          entry: songs,
        },
      },
    });
};

describe('pages | Home', () => {
  afterEach(() => {
    api.get.mockClear();
  });

  test('should show card placeholder while call the api', () => {
    mockCall();
    const { getByTestId } = render(<App />);
    expect(getByTestId('loading')).toBeInTheDocument();
  });

  test('should render the navigation buttons', () => {
    mockCall();
    const { getByText } = render(<App />);
    expect(getByText(/Albums/)).toBeInTheDocument();
    expect(getByText(/Songs/)).toBeInTheDocument();
    expect(getByText(/Favorites/)).toBeInTheDocument();
  });

  test('should render the albums cards as the first load', async () => {
    mockCall();
    const { getAllByTestId } = render(<App />);
    const cardsTitle = await waitFor(() => getAllByTestId('card-title').map((card) => card.textContent));
    const cardsSubtitle = await waitFor(() => getAllByTestId('card-subtitle').map((card) => card.textContent));
    expect(cardsTitle).toEqual(['Love & Hate', 'Cypress Grove']);
    expect(cardsSubtitle).toEqual(['By Michael Kiwanuka', 'By Jimmy "Duck" Holmes']);
  });

  test('should render the songs when user clicks from navigation', async () => {
    mockCall();
    const { getByText, getByTestId, getAllByTestId } = render(<App />);
    expect(getByTestId('loading')).toBeInTheDocument();
    await waitFor(() => getAllByTestId('card').map((card) => card.textContent));
    const button = getByText(/Songs/);
    fireEvent.click(button);
    expect(getByTestId('loading')).toBeInTheDocument();
    const cardsTitle = await waitFor(() => getAllByTestId('card-title').map((card) => card.textContent));
    const cardsSubtitle = await waitFor(() => getAllByTestId('card-subtitle').map((card) => card.textContent));
    expect(cardsTitle).toEqual(['Leave The Door Open', "Don't Start Now"]);
    expect(cardsSubtitle).toEqual(['By Bruno Mars, Anderson .Paak & Silk Sonic', 'By Dua Lipa']);
  });

  test('should add and remove card to favorites', async () => {
    mockCall();
    const { getByText, getByTestId, getAllByTestId } = render(<App />);
    const button = getByText(/Favorites/);
    const cards = await waitFor(() => getAllByTestId('card'));
    const card = cards[0];
    fireEvent.click(card);
    fireEvent.click(button);
    const favorite = getByTestId('card');
    expect(favorite).toBeInTheDocument();
    fireEvent.click(favorite);
    expect(getByText(/No results for favorites/)).toBeInTheDocument();
  });

  test('should filter the cards', async () => {
    mockCall();
    const { getByTestId, getAllByTestId, getByText } = render(<App />);
    const search = getByTestId('search');
    fireEvent.click(getByText(/Albums/));
    const cards = await waitFor(() => getAllByTestId('card'));
    expect(search).toBeInTheDocument();
    expect(cards.length).toEqual(2);
    fireEvent.change(search, { target: { value: 'love' } });
    const filteredCards = await waitFor(() => getAllByTestId('card'));
    expect(filteredCards.length).toEqual(1);
  });

  test('should filter the cards and do not find any results', async () => {
    mockCall();
    const { getByTestId, getAllByTestId, getByText } = render(<App />);
    const search = getByTestId('search');
    const cards = await waitFor(() => getAllByTestId('card'));
    expect(search).toBeInTheDocument();
    expect(cards.length).toEqual(2);
    fireEvent.change(search, { target: { value: 'asdf' } });
    expect(getByText(/No results for albums/)).toBeInTheDocument();
  });
});

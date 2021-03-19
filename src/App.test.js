import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, waitFor, fireEvent } from '@testing-library/react';
import api from './services/itunes';
import { albums, songs } from './__mocks__/apiData';

import App from './App';

const mockCall = (entry) => {
  api.get
    .mockResolvedValueOnce({
      data: {
        feed: {
          entry,
        },
      },
    });
};

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(
      <Router history={history}>
        {component}
      </Router>,
    ),
  };
};

describe('pages | Home', () => {
  afterEach(() => {
    api.get.mockClear();
  });

  test('should show card placeholder while call the api', () => {
    mockCall(albums);
    const { getByTestId } = renderWithRouter(<App />);
    expect(getByTestId('loading')).toBeInTheDocument();
  });

  test('should render the navigation buttons', () => {
    mockCall(albums);
    const { getByText } = renderWithRouter(<App />);
    expect(getByText(/Albums/)).toBeInTheDocument();
    expect(getByText(/Songs/)).toBeInTheDocument();
    expect(getByText(/Favorites/)).toBeInTheDocument();
  });

  test('should render the albums cards as the first load', async () => {
    mockCall(albums);
    const { getAllByTestId } = renderWithRouter(<App />);
    const cardsTitle = await waitFor(() => getAllByTestId('card-title').map((card) => card.textContent));
    const cardsSubtitle = await waitFor(() => getAllByTestId('card-subtitle').map((card) => card.textContent));
    expect(cardsTitle).toEqual(['Love & Hate', 'Cypress Grove']);
    expect(cardsSubtitle).toEqual(['By Michael Kiwanuka', 'By Jimmy "Duck" Holmes']);
  });

  test('should render the songs when user clicks from navigation', async () => {
    mockCall(songs);
    const { getByText, getByTestId, getAllByTestId } = renderWithRouter(<App />);
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
    mockCall(albums);
    const { getByText, getByTestId, getAllByTestId } = renderWithRouter(<App />);
    const button = getByText(/Favorites/);
    const cards = await waitFor(() => getAllByTestId('card'));
    const card = cards[0];
    fireEvent.click(card);
    fireEvent.click(button);
    const favorite = getByTestId('card');
    expect(favorite).toBeInTheDocument();
    fireEvent.click(favorite);
    const emptyText = getByText(/No results for Favorites Albums/);
    expect(emptyText).toBeInTheDocument();
  });

  test('should filter the cards', async () => {
    mockCall(albums);
    const { getByTestId, getAllByTestId, getByText } = renderWithRouter(<App />);
    const search = getByTestId('search');
    fireEvent.click(getByTestId('menu-option-albums'));
    const cards = await waitFor(() => getAllByTestId('card'));
    expect(search).toBeInTheDocument();
    expect(cards.length).toEqual(2);
    fireEvent.change(search, { target: { value: 'love' } });
    const filteredCards = await waitFor(() => getAllByTestId('card'));
    expect(filteredCards.length).toEqual(1);
    fireEvent.change(search, { target: { value: '' } });
  });

  test('should filter the cards and do not find any results', async () => {
    mockCall(albums);
    const { getByTestId, getAllByTestId, getByText } = renderWithRouter(<App />);
    const search = getByTestId('search');
    const cards = await waitFor(() => getAllByTestId('card'));
    expect(search).toBeInTheDocument();
    expect(cards.length).toEqual(2);
    fireEvent.change(search, { target: { value: 'asdf' } });
    expect(getByText(/No results for Albums/)).toBeInTheDocument();
    fireEvent.change(search, { target: { value: '' } });
  });

  test('should filter the cards and click to clear the result', async () => {
    mockCall(albums);
    const { getByTestId, getAllByTestId, getByText } = renderWithRouter(<App />);
    const search = getByTestId('search');
    fireEvent.click(getByText(/Albums/));
    await waitFor(() => getAllByTestId('card'));
    expect(search).toBeInTheDocument();
    fireEvent.change(search, { target: { value: 'love' } });
    const clear = getByTestId('search-clear');
    expect(clear).toBeInTheDocument();
    const filteredCards = await waitFor(() => getAllByTestId('card'));
    expect(filteredCards.length).toEqual(1);
    fireEvent.click(clear);
    const afterClearCards = await waitFor(() => getAllByTestId('card'));
    expect(afterClearCards.length).toEqual(2);
  });
});

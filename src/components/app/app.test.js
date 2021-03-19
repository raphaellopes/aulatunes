import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, waitFor, fireEvent } from '@testing-library/react';
import api from '../../services/itunes';
import { albums, songs } from '../../__mocks__/apiData';

import App from './index';

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

describe('App | full app rendering/navigating', () => {
  afterEach(() => {
    api.get.mockClear();
  });

  describe('render elements', () => {
    test('should show card placeholder while call the api', () => {
      mockCall(albums);
      const { getByTestId } = renderWithRouter(<App />);
      expect(getByTestId('loading')).toBeInTheDocument();
    });

    test('should render the navigation buttons', () => {
      mockCall(albums);
      const { getByTestId } = renderWithRouter(<App />);
      expect(getByTestId('menu-option-albums-active')).toBeInTheDocument();
      expect(getByTestId('menu-option-songs')).toBeInTheDocument();
      expect(getByTestId('menu-option-favorites')).toBeInTheDocument();
    });
  });

  describe('albums', () => {
    test('should render the albums cards as the first load', async () => {
      mockCall(albums);
      const { getAllByTestId } = renderWithRouter(<App />);
      const cardsTitle = await waitFor(() => getAllByTestId('card-title').map((card) => card.textContent));
      const cardsSubtitle = await waitFor(() => getAllByTestId('card-subtitle').map((card) => card.textContent));
      expect(cardsTitle).toEqual(['Love & Hate', 'Cypress Grove']);
      expect(cardsSubtitle).toEqual(['By Michael Kiwanuka', 'By Jimmy "Duck" Holmes']);
    });

    test('should add a favorite song and remove as favorite in same route', async () => {
      mockCall(albums);
      const { getByText, getByTestId, getAllByTestId } = renderWithRouter(<App />);
      const cards = await waitFor(() => getAllByTestId('card'));
      expect(cards.length).toEqual(2);
      fireEvent.click(cards[0]);
      fireEvent.click(getByTestId('menu-option-favorites'));
      const favoriteCards = await waitFor(() => getAllByTestId('card'));
      expect(favoriteCards.length).toEqual(1);
      fireEvent.click(getByTestId('menu-option-albums'));
      const cardsUnFavorite = await waitFor(() => getAllByTestId('card'));
      fireEvent.click(cardsUnFavorite[0]);
      fireEvent.click(getByTestId('menu-option-favorites'));
      const emptyText = getByText(/No results for Favorites Albums/);
      expect(emptyText).toBeInTheDocument();
      fireEvent.click(getByTestId('menu-option-albums'));
    });

    describe('Favorites', () => {
      test('should add a favorite and remove from favorites route', async () => {
        mockCall(albums);
        const { getByText, getByTestId, getAllByTestId } = renderWithRouter(<App />);
        const button = getByTestId('menu-option-favorites');
        const cards = await waitFor(() => getAllByTestId('card'));
        const card = cards[0];
        fireEvent.click(card);
        fireEvent.click(button);
        expect(getByTestId('menu-option-favorites-active')).toBeInTheDocument();
        const favorite = getByTestId('card');
        expect(favorite).toBeInTheDocument();
        fireEvent.click(favorite);
        const emptyText = getByText(/No results for Favorites Albums/);
        expect(emptyText).toBeInTheDocument();
      });
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

  describe('Songs', () => {
    test('should render the songs when user clicks from navigation', async () => {
      mockCall(songs);
      const { getByText, getByTestId, getAllByTestId } = renderWithRouter(<App />);
      await waitFor(() => getAllByTestId('card').map((card) => card.textContent));
      const button = getByTestId('menu-option-songs');
      fireEvent.click(button);
      expect(getByTestId('loading')).toBeInTheDocument();
      expect(getByTestId('menu-option-songs-active')).toBeInTheDocument();
      const cardsTitle = await waitFor(() => getAllByTestId('card-title').map((card) => card.textContent));
      const cardsSubtitle = await waitFor(() => getAllByTestId('card-subtitle').map((card) => card.textContent));
      expect(cardsTitle).toEqual(['Leave The Door Open', "Don't Start Now"]);
      expect(cardsSubtitle).toEqual(['By Bruno Mars, Anderson .Paak & Silk Sonic', 'By Dua Lipa']);
    });

    test('should add a favorite song and remove as favorite in same route', async () => {
      mockCall(songs);
      const { getByText, getByTestId, getAllByTestId } = renderWithRouter(<App />);
      const cards = await waitFor(() => getAllByTestId('card'));
      expect(cards.length).toEqual(2);
      fireEvent.click(cards[0]);
      fireEvent.click(getByTestId('menu-option-favorites'));
      const favoriteCards = await waitFor(() => getAllByTestId('card'));
      expect(favoriteCards.length).toEqual(1);
      fireEvent.click(getByTestId('menu-option-songs'));
      const cardsUnFavorite = await waitFor(() => getAllByTestId('card'));
      fireEvent.click(cardsUnFavorite[0]);
      fireEvent.click(getByTestId('menu-option-favorites'));
      const emptyText = getByText(/No results for Favorites Songs/);
      expect(emptyText).toBeInTheDocument();
    });
  });
});

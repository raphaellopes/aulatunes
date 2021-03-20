import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {
  render, waitFor, fireEvent, screen,
} from '@testing-library/react';
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

const mapCardText = (card) => card.textContent;

describe('App | full app rendering/navigating', () => {
  afterEach(() => {
    api.get.mockClear();
  });

  test('should render the basic elements from site', () => {
    mockCall(albums);
    renderWithRouter(<App />);
    expect(screen.getByTestId('loading')).toBeInTheDocument();
    expect(screen.getByTestId('menu-option-albums-active')).toBeInTheDocument();
    expect(screen.getByTestId('menu-option-songs')).toBeInTheDocument();
    expect(screen.getByTestId('menu-option-favorites')).toBeInTheDocument();
    expect(screen.getByTestId('search')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByAltText('Aula Education')).toBeInTheDocument();
  });

  describe('Albums', () => {
    test('should render the albums cards as the first load', async () => {
      mockCall(albums);
      renderWithRouter(<App />);
      const cardsTitle = await waitFor(() => screen.getAllByTestId('card-title').map(mapCardText));
      const cardsSubtitle = await waitFor(() => screen.getAllByTestId('card-subtitle').map(mapCardText));
      expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
      expect(cardsTitle).toEqual(['Love & Hate', 'Cypress Grove']);
      expect(cardsSubtitle).toEqual(['By Michael Kiwanuka', 'By Jimmy "Duck" Holmes']);
    });

    test('should add a favorite album and remove it from same route', async () => {
      mockCall(albums);
      renderWithRouter(<App />);
      const cards = await waitFor(() => screen.getAllByTestId('card'));
      expect(cards.length).toEqual(2);
      fireEvent.click(cards[0]);
      fireEvent.click(screen.getByTestId('menu-option-favorites'));
      const favoriteCards = await waitFor(() => screen.getAllByTestId('card'));
      expect(favoriteCards.length).toEqual(1);
      fireEvent.click(screen.getByTestId('menu-option-albums'));
      const cardsUnFavorite = await waitFor(() => screen.getAllByTestId('card'));
      fireEvent.click(cardsUnFavorite[0]);
      fireEvent.click(screen.getByTestId('menu-option-favorites'));
      const emptyText = screen.getByText(/No results for Favorites Albums/);
      expect(emptyText).toBeInTheDocument();
      fireEvent.click(screen.getByTestId('menu-option-albums'));
    });

    describe('Favorites', () => {
      test('should add a favorite and remove from favorites route', async () => {
        mockCall(albums);
        renderWithRouter(<App />);
        const cards = await waitFor(() => screen.getAllByTestId('card'));
        fireEvent.click(cards[0]);
        fireEvent.click(screen.getByTestId('menu-option-favorites'));
        expect(screen.getByTestId('menu-option-favorites-active')).toBeInTheDocument();
        const favorite = screen.getByTestId('card');
        expect(favorite).toBeInTheDocument();
        fireEvent.click(favorite);
        expect(screen.getByText(/No results for Favorites Albums/)).toBeInTheDocument();
      });
    });

    test('should filter the cards', async () => {
      mockCall(albums);
      renderWithRouter(<App />);
      const search = screen.getByTestId('search');
      fireEvent.click(screen.getByTestId('menu-option-albums'));
      const cards = await waitFor(() => screen.getAllByTestId('card'));
      expect(search).toBeInTheDocument();
      expect(cards.length).toEqual(2);
      fireEvent.change(search, { target: { value: 'love' } });
      const filteredCards = await waitFor(() => screen.getAllByTestId('card'));
      expect(filteredCards.length).toEqual(1);
      fireEvent.change(search, { target: { value: '' } });
    });

    test('should filter the cards and do not find any results', async () => {
      mockCall(albums);
      renderWithRouter(<App />);
      const search = screen.getByTestId('search');
      const cards = await waitFor(() => screen.getAllByTestId('card'));
      expect(search).toBeInTheDocument();
      expect(cards.length).toEqual(2);
      fireEvent.change(search, { target: { value: 'asdf' } });
      expect(screen.getByText(/No results for Albums/)).toBeInTheDocument();
      fireEvent.change(search, { target: { value: '' } });
    });

    test('should filter the cards and click to clear the result', async () => {
      mockCall(albums);
      renderWithRouter(<App />);
      const search = screen.getByTestId('search');
      await waitFor(() => screen.getAllByTestId('card'));
      expect(search).toBeInTheDocument();
      fireEvent.change(search, { target: { value: 'love' } });
      const clear = screen.getByTestId('search-clear');
      expect(clear).toBeInTheDocument();
      const filteredCards = await waitFor(() => screen.getAllByTestId('card'));
      expect(filteredCards.length).toEqual(1);
      fireEvent.click(clear);
      const afterClearCards = await waitFor(() => screen.getAllByTestId('card'));
      expect(afterClearCards.length).toEqual(2);
    });
  });

  describe('Songs', () => {
    test('should render the songs when user clicks from navigation', async () => {
      mockCall(songs);
      renderWithRouter(<App />);
      await waitFor(() => screen.getAllByTestId('card').map((card) => card.textContent));
      const button = screen.getByTestId('menu-option-songs');
      fireEvent.click(button);
      expect(screen.getByTestId('loading')).toBeInTheDocument();
      expect(screen.getByTestId('menu-option-songs-active')).toBeInTheDocument();
      const cardsTitle = await waitFor(() => screen.getAllByTestId('card-title').map(mapCardText));
      const cardsSubtitle = await waitFor(() => screen.getAllByTestId('card-subtitle').map(mapCardText));
      expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
      expect(cardsTitle).toEqual(['Leave The Door Open', "Don't Start Now"]);
      expect(cardsSubtitle).toEqual(['By Bruno Mars, Anderson .Paak & Silk Sonic', 'By Dua Lipa']);
    });

    test('should add a favorite song and remove it from same route', async () => {
      mockCall(songs);
      renderWithRouter(<App />);
      const cards = await waitFor(() => screen.getAllByTestId('card'));
      expect(cards.length).toEqual(2);
      fireEvent.click(cards[0]);
      fireEvent.click(screen.getByTestId('menu-option-favorites'));
      expect(screen.getAllByTestId('card').length).toEqual(1);
      fireEvent.click(screen.getByTestId('menu-option-songs'));
      fireEvent.click(screen.getAllByTestId('card')[0]);
      fireEvent.click(screen.getByTestId('menu-option-favorites'));
      expect(screen.getByText(/No results for Favorites Songs/)).toBeInTheDocument();
    });
  });
});

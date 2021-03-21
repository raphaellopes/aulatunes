import React from 'react';
import PropTypes from 'prop-types';
import { chunk } from '../../utils';
import {
  Card, CardImage, CardContent, CardTitle, CardSubtitle, CardLabel,
  CardList, Text, CardPlaceholder, CardImagePlaceholder, CardRow,
} from '../../components';
import { useFavoritesHook } from '../../store/ducks/favorites';

export const ListContainer = ({
  cards, loading, emptyText, favoritesFeature,
}) => {
  const favorites = useFavoritesHook();
  const isFavorite = (id) => favorites.data[favoritesFeature].includes(id);

  const mapFavorite = (card) => ({
    ...card,
    isFavorite: isFavorite(card.id),
  });

  const rows = chunk(cards.map(mapFavorite), 3);

  const handleClickFavorite = (value) => {
    if (isFavorite(value)) {
      favorites.remove(value, favoritesFeature);
    } else {
      favorites.add(value, favoritesFeature);
    }
  };

  const renderLoading = (
    <CardRow data-testid="loading">
      <CardPlaceholder />
      <CardPlaceholder />
      <CardPlaceholder />
    </CardRow>
  );

  const renderCards = (card) => {
    const {
      id, name, image, artist, category, price, isFavorite: isCardFavorite,
    } = card;
    return (
      <Card
        key={`card-item-${id}`}
        onClick={() => handleClickFavorite(id)}
        variant={isCardFavorite ? 'secondary' : 'default'}
        data-testid="card"
      >
        <CardImage
          src={image}
          alt={name}
          placeholder={<CardImagePlaceholder />}
          width="100%"
          height="100%"
        />
        <CardContent>
          <CardTitle data-testid="card-title">{name}</CardTitle>
          <CardSubtitle data-testid="card-subtitle">{`By ${artist}`}</CardSubtitle>
          {category && <CardLabel data-testid="card-category">{category}</CardLabel>}
          {price && <CardLabel data-testid="card-price">{price}</CardLabel>}
        </CardContent>
      </Card>
    );
  };

  const renderRows = rows.map((item, index) => {
    const key = `card-row-${index}`;
    return (
      <CardRow key={key}>
        {item.map(renderCards)}
      </CardRow>
    );
  });

  const renderEmpty = !loading && !cards.length && (
    <Text data-testid="card-list-empty">{emptyText}</Text>
  );

  return (
    <CardList>
      {loading ? renderLoading : renderRows}
      {renderEmpty}
    </CardList>
  );
};

ListContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    artist: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.string,
    isFavorite: PropTypes.bool,
  })).isRequired,
  loading: PropTypes.bool.isRequired,
  emptyText: PropTypes.string,
  favoritesFeature: PropTypes.string.isRequired,
};

ListContainer.defaultProps = {
  emptyText: '',
};

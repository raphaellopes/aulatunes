import React from 'react';
import PropTypes from 'prop-types';
import { metrics } from '../../styles';
import {
  Card, CardImage, CardContent, CardTitle, CardSubtitle, CardList,
  Text, CardPlaceholder, CardImagePlaceholder,
} from '../../components';
import { useFavoritesHook } from '../../store/ducks/favorites';

export const ListContainer = ({
  cards, loading, emptyText, favoritesFeature,
}) => {
  const favorites = useFavoritesHook();
  const isFavorite = (id) => favorites.data[favoritesFeature].includes(id);

  const mapFavorite = (item) => ({
    ...item,
    isFavorite: isFavorite(item.id),
  });

  const handleClickFavorite = (value) => {
    if (isFavorite(value)) {
      favorites.remove(value, favoritesFeature);
    } else {
      favorites.add(value, favoritesFeature);
    }
  };
  const renderLoading = (
    <div data-testid="loading">
      <CardPlaceholder />
      <CardPlaceholder />
    </div>
  );

  const renderCards = cards.map(mapFavorite).map((card) => (
    <Card
      key={`card-item-${card.id}`}
      onClick={() => handleClickFavorite(card.id)}
      variant={card.isFavorite ? 'secondary' : 'default'}
      data-testid="card"
    >
      <CardImage
        src={card.image}
        alt={card.name}
        placeholder={<CardImagePlaceholder />}
        width={metrics.avatar.md}
        height={metrics.avatar.md}
      />
      <CardContent>
        <CardTitle data-testid="card-title">{card.name}</CardTitle>
        <CardSubtitle data-testid="card-subtitle">{`By ${card.artist}`}</CardSubtitle>
      </CardContent>
    </Card>
  ));

  const renderEmpty = !loading && !cards.length && (
    <Text data-testid="card-list-empty">{emptyText}</Text>
  );

  return (
    <CardList>
      {loading ? renderLoading : renderCards}
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
  })).isRequired,
  loading: PropTypes.bool.isRequired,
  emptyText: PropTypes.string,
  favoritesFeature: PropTypes.string.isRequired,
};

ListContainer.defaultProps = {
  emptyText: '',
};

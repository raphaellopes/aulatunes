import React from 'react';
import PropTypes from 'prop-types';
import { metrics } from '../../styles';
import { Text } from '../thypography';
import {
  Card, CardImage, CardContent, CardTitle, CardSubtitle, CardListContainer,
} from './styles';
import { CardPlaceholder, CardImagePlaceholder } from './placeholder';

export const CardList = ({
  cards, loading, emptyText, onClickFavorite,
}) => {
  const renderLoading = (
    <div data-testid="loading">
      <CardPlaceholder />
      <CardPlaceholder />
    </div>
  );

  const renderCards = cards.map((card) => (
    <Card
      key={`card-item-${card.id}`}
      onClick={() => onClickFavorite(card.id)}
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
    <CardListContainer>
      {loading ? renderLoading : renderCards}
      {renderEmpty}
    </CardListContainer>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    artist: PropTypes.string,
    image: PropTypes.string,
  })).isRequired,
  loading: PropTypes.bool.isRequired,
  emptyText: PropTypes.string,
  onClickFavorite: PropTypes.func.isRequired,
};

CardList.defaultProps = {
  emptyText: '',
};

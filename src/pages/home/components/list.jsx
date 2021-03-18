import React from 'react';
import PropTypes from 'prop-types';
import {
  CardList, CardMusic, CardPlaceholder, Text,
} from '../../../components';

export const ListComponent = ({
  cards, loading, emptyText, onClickFavorite,
}) => {
  const renderLoading = (
    <>
      <CardPlaceholder />
      <CardPlaceholder />
    </>
  );

  const renderCards = cards.map((card) => (
    <CardMusic
      key={`card-item-${card.id}`}
      title={card.name}
      subtitle={`By ${card.artist}`}
      image={{
        src: card.image,
        alt: card.name,
      }}
      onClickCard={() => onClickFavorite(card.id, card.group)}
    />
  ));

  const renderEmpty = !loading && !cards.length && (<Text>{emptyText}</Text>);

  return (
    <CardList>
      {loading ? renderLoading : renderCards}
      {renderEmpty}
    </CardList>
  );
};

ListComponent.propTypes = {
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

ListComponent.defaultProps = {
  emptyText: '',
};

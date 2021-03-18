import React from 'react';
import PropTypes from 'prop-types';
import { CardList, CardMusic, CardPlaceholder } from '../../../components';

export const ListComponent = ({ cards, loading }) => {
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
    />
  ));

  return (
    <CardList>
      {loading ? renderLoading : renderCards}
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
};

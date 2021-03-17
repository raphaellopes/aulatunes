import React from 'react';
import PropTypes from 'prop-types';
import {
  CardList, CardMusic,
} from '../../../components';

export const ListContainer = ({ cards }) => (
  <CardList>
    {cards.map((card) => (
      <CardMusic
        key={`card-item-${card.id}`}
        title={card.name}
        subtitle={`By ${card.artist}`}
        image={{
          src: card.image,
          alt: card.name,
        }}
      />
    ))}
  </CardList>
);

ListContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    artist: PropTypes.string,
    image: PropTypes.string,
  })).isRequired,
};

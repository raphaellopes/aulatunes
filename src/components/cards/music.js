import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, CardImage, CardImagePlaceholder, CardTitle, CardSubtitle, cardProps,
} from './base';

export const CardMusic = ({
  title, subtitle, image, onClickCard, variant, id,
}) => (
  <Card onClick={onClickCard} variant={variant} data-testid={id}>
    <CardImage
      src={image.src}
      alt={image.alt}
      placeholder={<CardImagePlaceholder />}
      width={60}
      height={60}
    />
    <CardContent>
      <CardTitle data-testid={`${id}-title`}>{title}</CardTitle>
      <CardSubtitle data-testid={`${id}-subtitle`}>{subtitle}</CardSubtitle>
    </CardContent>
  </Card>
);

CardMusic.propTypes = {
  ...cardProps,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
  onClickCard: PropTypes.func,
  id: PropTypes.string,
};

CardMusic.defaultProps = {
  onClickCard: undefined,
  id: undefined,
};

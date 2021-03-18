import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, CardImage, CardImagePlaceholder, CardTitle, CardSubtitle, cardProps,
} from './base';

export const CardMusic = ({
  title, subtitle, image, onClickCard, variant,
}) => (
  <Card onClick={onClickCard} variant={variant}>
    <CardImage
      src={image.src}
      alt={image.alt}
      placeholder={<CardImagePlaceholder />}
      width={60}
      height={60}
    />
    <CardContent>
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{subtitle}</CardSubtitle>
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
};

CardMusic.defaultProps = {
  onClickCard: undefined,
};

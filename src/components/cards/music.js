import React from 'react';
import PropTypes from 'prop-types';
import { metrics } from '../../styles';
import {
  Card, CardContent, CardImage, CardTitle, CardSubtitle, cardProps,
} from './base';
import { CardImagePlaceholder } from './placeholder';

export const CardMusic = ({
  title, subtitle, image, onClickCard, variant, id,
}) => (
  <Card onClick={onClickCard} variant={variant} data-testid={id}>
    <CardImage
      src={image.src}
      alt={image.alt}
      placeholder={<CardImagePlaceholder />}
      width={metrics.avatar.md}
      height={metrics.avatar.md}
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

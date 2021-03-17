import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, CardImage, CardImagePlaceholder, CardTitle, CardSubtitle,
} from './base';

export const CardMusic = ({
  title, subtitle, image,
}) => (
  <Card>
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
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
};

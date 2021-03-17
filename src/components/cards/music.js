import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, CardImage, CardImagePlaceholder,
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
      <h2>{title}</h2>
      <p>{subtitle}</p>
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

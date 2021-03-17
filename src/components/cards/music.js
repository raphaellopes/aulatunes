import React from 'react';
import PropTypes from 'prop-types';
import { Card } from './base';

export const CardMusic = ({ title, subtitle }) => (
  <Card>
    <h2>{title}</h2>
    <p>{subtitle}</p>
  </Card>
);

CardMusic.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

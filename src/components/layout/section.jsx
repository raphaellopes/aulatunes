import React from 'react';
import PropTypes from 'prop-types';
import { SectionContainer, SectionTitle } from './styles';

export const Section = ({ children, title }) => (
  <SectionContainer>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </SectionContainer>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { Container, SectionTitle } from './styles';

export const Section = ({ children, title }) => (
  <Container>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </Container>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

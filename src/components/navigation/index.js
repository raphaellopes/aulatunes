import React from 'react';
import { Container, MenuItem } from './styles';

export const Navigation = () => (
  <Container>
    <MenuItem variant="primary">Albuns</MenuItem>
    <MenuItem>Songs</MenuItem>
    <MenuItem>Favorites</MenuItem>
  </Container>
);

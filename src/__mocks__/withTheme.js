import React from 'react';
import { ThemeProvider } from 'styled-components';

export const withTheme = (Component) => (
  <ThemeProvider theme={{ mode: 'light' }}>
    {Component}
  </ThemeProvider>
);

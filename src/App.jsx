import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles';
import Home from './pages/home';

const App = () => (
  <ThemeProvider theme={{ mode: 'light' }}>
    <GlobalStyle />
    <Home />
  </ThemeProvider>
);

export default App;

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';

import { Header } from './components';
import store from './store';
import { GlobalStyle } from './styles';
import Home from './pages/home';

const App = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={{ mode: 'light' }}>
      <GlobalStyle />
      <Header />
      <Home />
    </ThemeProvider>
  </ReduxProvider>
);

export default App;

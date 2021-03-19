import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';

import store from './store';
import { GlobalStyle } from './styles';
import Main from './pages/main';

const App = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={{ mode: 'light' }}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route component={Main} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </ReduxProvider>
);

export default App;

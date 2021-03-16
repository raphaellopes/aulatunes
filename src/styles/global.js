import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    font-family: sans-serif;
    text-rendering: optimizeLegibility !important;
    background-color: ${colors.light_10};
    -webkit-font-smoothing: antialiased !important;
  }
`;

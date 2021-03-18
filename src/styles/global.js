import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';
import { font } from './font';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    font-family: ${font.family.main};
    text-rendering: optimizeLegibility !important;
    background-color: ${colors.light_10};
    -webkit-font-smoothing: antialiased !important;
  }
`;

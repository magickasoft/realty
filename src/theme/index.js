import React from 'react';
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import {colors, formatterColor} from './colors';

export {size, maxDevice, minDevice} from './device';

export const theme = {
  name: 'Default',
  colors,
  formatterColor,
};

export const Theme = ({children}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: #f5f5f5;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    color: #38B662;
  }

  * {
    box-sizing: border-box;
  }
`;

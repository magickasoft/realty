import React from 'react';
import {Global, css} from '@emotion/react';
import {colors, formatterColor} from './colors';

export {size, maxDevice, minDevice} from './device';

export const theme = {
  colors,
  formatterColor,
};

export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      html,
      body {
        background-color: #f5f5f5;
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
          Droid Sans, Helvetica Neue, sans-serif;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
      a:hover {
        color: #009688;
      }

      * {
        box-sizing: border-box;
      }
    `}
  />
);

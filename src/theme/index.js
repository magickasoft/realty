import React from 'react';
import {ThemeProvider} from 'styled-components';
import {colors, formatterColor} from './colors';

export * from './device';

export const Theme = ({children}) => <ThemeProvider theme={{colors, formatterColor}}>{children}</ThemeProvider>;

export const theme = {
  name: 'Default',
  colors,
  formatterColor,
};

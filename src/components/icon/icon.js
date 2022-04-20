import {get} from 'lodash';
import * as React from 'react';

import lib from './lib';

export const Icon = properties => {
  const {name, size, width = 22, height = 22, color, ...rest} = properties;

  if (!name) {
    return null;
  }

  const svg = get(lib, name);

  if (!svg) {
    return null;
  }

  const svgWidth = size || width;
  const svgHeight = size || height;

  return React.createElement(svg, {
    ...rest,
    color,
    width: svgWidth,
    height: svgHeight,
  });
};

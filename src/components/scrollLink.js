import React from 'react';
import SC from 'styled-components';
import {Link} from 'react-scroll';

const RSLink = SC(Link)`
  cursor: pointer;
`;

const defailtProps = {
  activeClass: 'active',
  hashSpy: true,
  spy: true,
  smooth: true,
  duration: 500,
  offset: 50,
};

export const ScrollLink = ({children, ...props}) => (
  <RSLink {...defailtProps} {...props}>
    {children}
  </RSLink>
);

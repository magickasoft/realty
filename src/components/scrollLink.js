import React from 'react';
import SC from '@emotion/styled';
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
  <RSLink rel="canonical" {...defailtProps} {...props}>
    {children}
  </RSLink>
);

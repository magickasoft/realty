import React from 'react';
import SC from 'styled-components';
import {Label, Text} from './common';

const Container = SC.div`
  text-align: center;
  width: 80%;
  margin: 20px auto;
`;

export const Banner = ({label, text, children}) => (
  <Container>
    {label && <Label>{label}</Label>}
    {text && <Text>{text}</Text>}
    {children && <Text>{children}</Text>}
  </Container>
);

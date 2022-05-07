import React from 'react';
import SC from 'styled-components';
import {Icon} from '../icon';
import {maxDevice, theme} from '../../theme';

const Container = SC.div`
  margin: 14px 0;
  padding: 4px 14px;
  text-align: center;
  @media ${maxDevice.mobileL} {
    margin: 12px 0;
    padding: 4px 12px;
  }
`;

const Label = SC.div`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  color: ${theme.colors.Black};
  text-align: center;
  margin-top: 22px;
`;

export const Item = ({label, name}) => (
  <Container>
    {name && <Icon name={name} size={94} />}
    {label && <Label>{label}</Label>}
  </Container>
);

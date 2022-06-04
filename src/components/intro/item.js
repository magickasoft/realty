import React from 'react';
import SC from '@emotion/styled';
import {maxDevice, theme} from '../../styles';

const Container = SC.div`
  margin: 14px 0;
  padding: 4px 14px;
  border-left: 2px solid rgba(3, 160, 167, 0.58);
  @media ${maxDevice.mobileL} {
    margin: 12px 0;
    padding: 4px 12px;
  }
`;

const Label = SC.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  color: ${theme.colors.White};
`;

const Text = SC.div`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: ${theme.colors.White};
  margin-top: 16px;
`;

export const Item = ({label, text}) => (
  <Container>
    {label && <Label>{label}</Label>}
    {text && <Text>{text}</Text>}
  </Container>
);

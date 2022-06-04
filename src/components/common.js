import React from 'react';
import SC from '@emotion/styled';
import {maxDevice, theme} from '../styles';

export const Label = SC.div`
  white-space: pre-line;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 1.1;
  color: ${({color}) => color || theme.colors.Black};
  margin-bottom: 15px;
  @media ${maxDevice.laptop} {
    font-size: 32px;
  }
  @media ${maxDevice.laptop} {
    font-size: 28px;
  }
`;

export const Text = SC.div`
  white-space: pre-line;
  font-style: normal;
  font-weight: 200;
  font-size: 24px;
  line-height: 1.1;
  color: ${({color}) => color || '#777777'};
  @media ${maxDevice.laptop} {
    font-size: 20px;
  }
  @media ${maxDevice.laptop} {
    font-size: 16px;
  }
`;

export const Section = SC.section`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
`;

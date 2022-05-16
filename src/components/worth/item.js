import React from 'react';
import SC from 'styled-components';
import Image from 'next/image';
import {Icon} from '../icon';
import {maxDevice, theme} from '../../theme';

const Label = SC.div`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  color: ${theme.colors.Black};
  text-align: center;
  margin-top: 22px;
  width: 95%;
`;

const Img = SC(Image)`
  object-fit: cover;
  border: 0;
`;

const Container = SC.div`
  transition: all 0.2s ease-in-out;
  padding: 14px 14px;
  text-align: center;
  overflow: hidden;
  border-radius: 12px;
  @media ${maxDevice.mobileL} {
    margin: 12px 0;
    padding: 4px 12px;
  }
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0px 3px 15px rgb(0 0 0 / 50%);
    background: ${theme.colors.Black};
 
  }
  &:hover ${Label} {
    color: ${theme.colors.White};
  }
`;
export const Item = ({label, src, name, width, height}) => (
  <Container>
    {name && <Icon name={name} size={94} />}
    {src && <Img src={src} width={width} height={height} alt={label} />}
    {label && <Label>{label}</Label>}
  </Container>
);

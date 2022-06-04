import React from 'react';
import SC from '@emotion/styled';
import {css} from '@emotion/react';
import {theme} from '../styles';

const Container = SC.button`
  background: linear-gradient(270deg, #00B981 -248.32%, #0496B6 100%);
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  padding: 8px 16px;
  border-radius: 62px;
  transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
  color: ${theme.colors.White};
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  text-decoration: none;
  ${({disabled}) =>
    disabled &&
    css`
      color: #525b67;
      box-shadow: none;
      background: rgba(255, 255, 255, 0.1);
      pointer-events: none;
      cursor: default;
    `}
`;

export const Button = ({children, ...props}) => <Container {...props}>{children}</Container>;

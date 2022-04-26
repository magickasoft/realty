import React from 'react';
import SC from 'styled-components';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import {Text} from './common';
import {maxDevice, minDevice, theme} from '../theme';

const Container = SC.header`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #ffffff50;
  filter: drop-shadow(0px 0px 20px rgba(51, 62, 102, 0.1)) drop-shadow(0px 0px 40px rgba(51, 62, 102, 0.05));
`;

const Line1 = SC.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  margin: 0 140px 0 140px;
  @media ${maxDevice.tablet} {
    margin: 0 30px 0 30px;
  }
  @media ${maxDevice.mobileL} {
    margin: 0 30px 0 30px;
  }
`;

const Call = SC(WifiCalling3Icon)`
  margin-right: 5px;
`;

const Label = SC.div`
  display: flex;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  color: #38B662;
  align-items: center;
  @media ${maxDevice.tablet} {
    display: none
  }
`;
const Label1 = SC(Label)`
  margin-left: 15px;
  @media ${maxDevice.laptop} {
    display: none
  }
`;

const Row = SC.div`
  display: flex;
  flex-direction: row;
`;

export const Header = props => (
  <Container>
    <Line1>
      <Text color={theme.colors.White}>
        <strong>НОВОСТРОЙКИ</strong> Новосибирска
      </Text>
      <Row>
        <Label>
          <Call fontSize="medium" />
          <a href="tel://+79134594444">8(913) 459-44-44</a>
        </Label>
        <Label1>
          <Call fontSize="medium" />
          <a href="tel://+79137083318">8(913) 708-33-18</a>
        </Label1>
      </Row>
    </Line1>
  </Container>
);

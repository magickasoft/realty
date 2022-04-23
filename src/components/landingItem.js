import React from 'react';
import SC from 'styled-components';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {maxDevice, minDevice, theme} from '../theme';

const Container = SC.div`
  margin: 15px 0;
  width: 50%;
  padding-right: 15px;
  @media ${maxDevice.mobileL} {
    margin: 12px 0;
    padding-right: 12px;
  }
  @media ${maxDevice.tablet} {
    width: 100%;
  }
  @media ${minDevice.laptop} {
    width: 33%;
  }
  @media ${minDevice.laptopL} {
    width: 25%;
  }
`;

const Check = SC(CheckCircleIcon)`
  margin-right: 5px;
`;

const Label = SC.div`
  display: flex;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  color: #38B662;
  margin-bottom: 12px;
`;

const Text = SC.div`
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 18px;
  color: ${theme.colors.White};
`;

export const LandingItem = ({label, text}) => {
  return (
    <Container>
      {label && (
        <Label>
          <Check fontSize="small" /> {label}
        </Label>
      )}
      {text && <Text>{text}</Text>}
    </Container>
  );
};

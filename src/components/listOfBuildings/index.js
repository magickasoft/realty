import React from 'react';
import SC from '@emotion/styled';
import Grid from '@mui/material/Grid';
import {Element} from 'react-scroll';
import {ObjectCard} from './objectСard';
import {objects} from './data';
import {maxDevice, minDevice, theme} from '../../styles';
import {Label, Text} from '../common';

const Container = SC(Grid)`
  padding: 20px 40px;
  @media ${maxDevice.tablet} {
    padding: 20px 20px;
  }
  @media ${minDevice.laptopL} {
    max-width: 85%; 
    margin: 0 auto; 
  }
`;

const Content = SC.div`
  margin: 0 140px 0 140px;
  @media ${maxDevice.tablet} {
    margin: 0 30px 0 30px;
  }
  @media ${maxDevice.mobileL} {
    margin: 0 30px 0 30px;
  }
`;

export const ListOfBuildings = props => (
  <Element name="offers">
    <div>
      <Content>
        <Label color={theme.colors.Black}>ПОПУЛЯРНЫЕ ЖИЛЫЕ КОМПЛЕКСЫ НОВОСИБИРСКА</Label>
        <Text color={theme.colors.Black}>
          В Новосибирске продается более <strong>24 000</strong> квартир в <strong>130</strong> жилых комплексах
        </Text>
      </Content>
      <Container container spacing={3}>
        {objects.map((o, i) => (
          <Grid key={o?.title || i} item xs={12} sm={6} md={4} lg={3} xl={3}>
            <ObjectCard key={o?.title || i} {...o} />
          </Grid>
        ))}
      </Container>
    </div>
  </Element>
);

import React from 'react';
import SC from 'styled-components';
import Grid from '@mui/material/Grid';
import {ObjectCard} from './objectСard';
import {objects} from './data';
import {maxDevice, minDevice, theme} from '../../theme';
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
  text-align: center;
  width: 80%;
  margin: 20px auto;
`;

export const ListOfBuildings = props => {
  return (
    <Container>
      <Content>
        <Label>САМЫЕ ПОПУЛЯРНЫЕ ЖИЛЫЕ КОМПЛЕКСЫ НОВОСТРОЕК В НОВОСИБИРСКЕ</Label>
        <Text>
          В Новосибирске продается более <strong>24 000</strong> квартир в <strong>130</strong> жилых комплексах
        </Text>
      </Content>
      <Grid container spacing={3}>
        {objects.map((o, i) => (
          <Grid key={o?.title || i} item xs={12} sm={6} md={4} lg={3} xl={3}>
            <ObjectCard key={o?.title || i} {...o} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

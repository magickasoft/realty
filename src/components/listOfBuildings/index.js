import React from 'react';
import SC from 'styled-components';
import Grid from '@mui/material/Grid';
import {Element} from 'react-scroll';
import {ObjectCard} from './objectСard';
import {objects} from './data';
import {maxDevice, minDevice} from '../../theme';
import {Banner} from '../banner';

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

export const ListOfBuildings = props => (
  <Element name="offers">
    <Container>
      <Banner label="САМЫЕ ПОПУЛЯРНЫЕ ЖИЛЫЕ КОМПЛЕКСЫ НОВОСТРОЕК В НОВОСИБИРСКЕ">
        В Новосибирске продается более <strong>24 000</strong> квартир в <strong>130</strong> жилых комплексах
      </Banner>
      <Grid container spacing={3}>
        {objects.map((o, i) => (
          <Grid key={o?.title || i} item xs={12} sm={6} md={4} lg={3} xl={3}>
            <ObjectCard key={o?.title || i} {...o} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </Element>
);

import React from 'react';
import SC from 'styled-components';
import Grid from '@mui/material/Grid';
import {Element} from 'react-scroll';
import {Banner} from '../banner';
import {Page} from '../page';
import {minDevice} from '../../theme';
import {list} from './data';
import {Item} from './item';

const List = SC(Grid)`
  margin-top: 60px;
  @media ${minDevice.laptopL} {
    max-width: 85%; 
    margin: 60px auto 0px auto; 
  }
`;

export const Worth = props => (
  <Element name="worth">
    <Page>
      <Banner label="НАШИ ПРЕИМУЩЕСТВА" />
      <List container spacing={3}>
        {list.map((o, i) => (
          <Grid key={o?.label || i} item xs={12} sm={6} md={6} lg={4} xl={4}>
            <Item key={i} {...o} />
          </Grid>
        ))}
      </List>
    </Page>
  </Element>
);

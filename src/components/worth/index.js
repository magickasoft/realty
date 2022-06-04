import React from 'react';
import SC from '@emotion/styled';
import Grid from '@mui/material/Grid';
import {Element} from 'react-scroll';
import {maxDevice, minDevice, theme} from '../../styles';
import {list} from './data';
import {Item} from './item';
import {Label} from '../common';

const List = SC(Grid)`
  padding: 20px 40px;
  @media ${maxDevice.tablet} {
    padding: 20px 20px;
  }
  @media ${minDevice.laptopL} {
    max-width: 85%; 
    margin: 60px auto 0px auto; 
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

const Container = SC.div`
  margin: 120px 0px 60px 0px;
  @media ${maxDevice.mobileL} {
    margin: 90px 0px 50px 0px;
  }
`;

export const Worth = props => (
  <Element name="worth">
    <Container>
      <Content>
        <Label color={theme.colors.Black}>НАШИ ПРЕИМУЩЕСТВА</Label>
      </Content>
      <List container spacing={3}>
        {list.map((o, i) => (
          <Grid key={o?.label || i} item xs={12} sm={6} md={6} lg={4} xl={4}>
            <Item key={i} {...o} />
          </Grid>
        ))}
      </List>
    </Container>
  </Element>
);

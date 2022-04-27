import React from 'react';
import SC from 'styled-components';
import Button from '@mui/material/Button';
import {Label, Text, Section} from '../common';
import {maxDevice, minDevice, theme} from '../../theme';
import {ListItem} from '../listItem';
import {ScrollLink} from '../scrollLink';
import {list} from './data';

const Container = SC.div`
  background-image: url("/static/images/cover.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;
const Layout = SC(Section)`
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.9) 100%);
  display: flex;
  align-items: flex-end;
  padding: 120px 140px 90px 140px;
  @media ${maxDevice.tablet} {
    align-items: flex-start;
    padding: 120px 30px 90px 30px;
  }
  @media ${maxDevice.mobileL} {
    align-items: flex-start;
    padding: 90px 30px 90px 30px;
  }
`;
const Content = SC.div`
  @media ${minDevice.tablet} {
    width: 560px;
  }
`;

const List = SC.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 60px;
  @media ${minDevice.laptopL} {
    justify-content: center;
  }
`;

const Btn = SC.div`
  margin-top: 50px;
`;

export const Intro = props => (
  <Container>
    <Layout>
      <div>
        <Content>
          <Label color={theme.colors.White}>КВАРТИРЫ В НОВОСТРОЙКАХ</Label>
          <Label color={theme.colors.White}>Новосибирска от 3 млн.руб.</Label>
          <Text color={theme.colors.White}>
            Подберите себе квартиру на сайте, или оставьте заявку, чтоб получить больше вариантов
          </Text>
        </Content>
        <Btn>
          <ScrollLink to="offers" id="offers">
            <Button variant="contained" size="large" color="primary">
              Подобрать квартиру
            </Button>
          </ScrollLink>
        </Btn>
        <List>
          {list.map((o, i) => (
            <ListItem key={i} {...o} />
          ))}
        </List>
      </div>
    </Layout>
  </Container>
);

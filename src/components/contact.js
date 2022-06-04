import React from 'react';
import SC from '@emotion/styled';
import {Element} from 'react-scroll';
import {ContactForm} from './contactForm';
import {Label, Text} from './common';
import {maxDevice, theme} from '../styles';

const Container = SC.div`
  // background: linear-gradient(90.07deg, #0F1D31 0.05%, #12161D 99.93%);
  padding: 80px 140px 60px 140px;
  @media ${maxDevice.tablet} {
    padding: 80px 30px 60px 30px;
  }
  @media ${maxDevice.mobileL} {
    padding: 50px 30px 50px 30px;
  }
`;

const Content = SC.div`
  width: 80%;
`;

export const Contact = props => (
  <Element name="contact">
    <Container>
      <Content>
        <Label color={theme.colors.Black}>НЕ НАШЛИ ПОДХОДЯЩУЮ КВАРТИРУ?</Label>
        <Text color={theme.colors.Black}>
          На сайте представлен не весь каталог. Оставьте заявку и мы подберем вам идеальную квартиру бесплатно!
        </Text>
      </Content>
      <ContactForm />
    </Container>
  </Element>
);

import React from 'react';
import SC from '@emotion/styled';
import Image from 'next/image';
import {minDevice, theme} from '../../styles';

const Wrapper = SC.div`
  width: 100%;
  height: 100%;
  display: inline-block;
  position: relative;
`;

const Block = SC.div`
  width: 100%;
  height: 100%;
`;

const Content = SC.div`
  color: ${theme.colors.White};
  width: 100%;
  bottom: 0;
  height: 100%;
  position: absolute;
`;

const Layout = SC.div`
  background-image: linear-gradient(transparent 0%, rgba(0, 0, 0, 0.5) 25%, rgba(0, 0, 0, 0.75) 60%, rgb(0, 0, 0) 90%);
  left: 0;
  width: 100%;
  bottom: 0;
  padding: 40px;
  position: absolute;
  max-height: 100%;
`;

const Picture = SC.picture`
  display: initial;
`;

const Img = SC(Image)`
  transition: filter 500ms linear 0s;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 0;
  max-width: 100%;
  display: inline-block;
  vertical-align: middle;
`;

const Label = SC.div`
  font-size: 1.375rem;
  font-family: Trade Gothic Bold No2, Arial Black, sans-serif;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: 0rem;
`;

const Text = SC.div`
  font-size: 0.75rem;
  font-family: Montserrat Regular, Verdana, sans-serif;
  font-weight: 400;
  line-height: 1.65;
  letter-spacing: 0rem;
`;

const Container = SC.div`
  display: flex;
  transition: all 0.2s ease-in-out;
  width: 100%;
  height: 375px;
  overflow: hidden;
  border-radius: 12px;
  &:hover {
    position: relative;
    transform: translateY(-6px);
    box-shadow: 0px 3px 15px rgb(0 0 0 / 50%);
  }
  @media ${minDevice.laptop} {
    max-width: 100%;
    max-height: 375px;
  }
`;

const Price = SC.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`;

export const ObjectCard = ({title, description, src, price}) => (
  <Container>
    <Wrapper>
      <Block>
        <Picture>
          <Img src={src} layout="fill" alt={title} />
        </Picture>
      </Block>
      <Content>
        <Layout>
          <Label>{title}</Label>
          {description && <Text>{description}</Text>}
          {price && <Price>{price}</Price>}
        </Layout>
      </Content>
    </Wrapper>
  </Container>
);

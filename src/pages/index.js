import React from 'react';
import Head from 'next/head';
import SC from 'styled-components';
import {ContactForm, ListOfBuildings, Page, LandingItem, Label, Text, Section} from '../components';
import {minDevice, maxDevice, theme} from '../theme';

const Layout = SC.div`
  background-image: url("/static/images/cover.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Block = SC(Section)`
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.1) 100%);
  display: flex;
  align-items: flex-end;
  padding: 120px 140px 90px 140px;
  @media ${maxDevice.tablet} {
    background: linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.1) 100%);
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

const Elements = SC.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 60px;
  @media ${minDevice.laptopL} {
    justify-content: center;
  }
`;

function Home() {
  return (
    <>
      <Head>
        <title>App</title>
        <meta property="og:title" content="app" />
        <meta property="og:description" content="app" />
        <meta property="og:url" content="https://site.com/about" />
        <meta property="og:image" content="/images/og/im_2.png" key="og:image" />
        <meta property="twitter:image" content="/images/og/im_2.png" key="twitter:image" />
        <meta property="twitter:title" content="app" />
        <meta property="twitter:description" content="app" />
        <meta property="twitter:url" content="https://site.com/about" />
        <meta name="description" content="app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Block>
          <div>
            <Content>
              <Label color={theme.colors.White}>КВАРТИРЫ В НОВОСТРОЙКАХ</Label>
              <Label color={theme.colors.White}>Новосибирска от 5 млн.руб.</Label>
              <Text color={theme.colors.White}>
                Подберите себе квартиру на сайте, или оставьте заявку, чтоб получить больше вариантов
              </Text>
            </Content>
            <Elements>
              <LandingItem
                label="Более 24.000 квартир"
                text="Предлагаем квартиры в 130 новостройках Новосибирска, как в сданы домах, так и на различных этапах строительства"
              />
              <LandingItem
                label="От проверенных застройщиков"
                text="В городе более 75 застройщиков, мы отобрали только тех, кто доказал свою надежность и не нарушает своих обязательств"
              />
              <LandingItem
                label="Без комиссий и переплат"
                text="Мы работаем для вас бесплатно и не берем комиссий со сделки. Зарплату нам платит застройщик, а не покупатель"
              />
            </Elements>
          </div>
        </Block>
      </Layout>
      <ListOfBuildings />
      <Page>
        <ContactForm />
      </Page>
    </>
  );
}

export default Home;

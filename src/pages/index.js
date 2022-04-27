import React from 'react';
import Head from 'next/head';
import {Element, Events, scrollSpy} from 'react-scroll';
import SC from 'styled-components';
import {ContactForm, ListOfBuildings, Page, Intro, Banner} from '../components';
import {ListItem} from '../components';
import {minDevice} from '../theme';

const Form = SC.div`
  text-align: center;
`;

const List = SC.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 60px;
  @media ${minDevice.laptopL} {
    justify-content: center;
  }
`;

const list = [
  {
    label: 'Покупка квартиры в Новостройке бесплатно',
  },
  {
    label: 'Получение ипотеки со ставкой от 2%',
  },
  {
    label: 'Дистанционное оформление сделки',
  },
  {
    label: 'Возможность использования материнского капитала',
  },
  {
    label: 'Продажа имеющегося жилья на выгодных условиях',
  },
  {
    label: 'Оформление военной ипотеки',
  },
  {
    label: 'Полное сопровождение на всех этапах сделки',
  },
];

function Home() {
  React.useEffect(() => {
    Events.scrollEvent.register('begin', function (to, element) {
      console.log('begin', to);
    });

    Events.scrollEvent.register('end', function (to, element) {
      console.log('end', to);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

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
      <Element name="intro">
        <Intro />
      </Element>
      <Element name="worth">
        <Page>
          <Banner label="НАШИ ПРЕИМУЩЕСТВА" />
          <List>
            {list.map((o, i) => (
              <ListItem key={i} {...o} />
            ))}
          </List>
        </Page>
      </Element>
      <Element name="offers">
        <ListOfBuildings />
      </Element>
      <Element name="contact">
        <Page>
          <Banner
            label="НЕ НАШЛИ ПОДХОДЯЩУЮ КВАРТИРУ?"
            text="На сайте представлен не весь каталог. Оставьте заявку и мы подберем вам идеальную квартиру бесплатно!"
          />
          <Form>
            <ContactForm />
          </Form>
        </Page>
      </Element>
    </>
  );
}

export default Home;

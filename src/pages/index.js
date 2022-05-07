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
  {
    label: 'Семейная Ипотека 4,5%',
  },
  {
    label: 'Трейд Ин ( Trade in)',
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
        <title>
          Новостройки Новосибирска: 🏢 купить квартиру в новостройке от застройщика, продажа недвижимости в строящемся
          доме, цены
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="max-image-preview:large" />
        <meta
          name="description"
          content="⭐ Новостройки Новосибирска по ценам от застройщиков! ➔ Без переплаты ✅ Бесплатно оформим ипотеку со сниженной ставкой. ➔ Все новостройки города. ☎️️ Звоните, отправляйте онлайн заявку."
        />
        <meta
          name="keywords"
          content="Квартиры от застройщика, НЕДВИЖИМОСТЬ В НОВОСИБИРСКЕ, Новостройки Новосибирск, Новостройки по выгодной цене, Новостройки выгодно, Новостройки в Новосибирске от застройщика, новостройки, жк, жилые комлексы, квартиры, в Новосибирске, новостройки от застройщика, купить новостройку, Новостройки в Новосибирске, Новостройки в Cоветском районе, Новостройки в Кировском районе, Новостройки в Ленинском районе, Новостройки в Дзержинском районе, Новостройки в Октябрьском районе, Новостройки в Заельцовском районе, Новостройки в Калининском районе, Новостройки в Первомайский районе, Новостройки в Центральный районе, Квартиры в НСК, Все новостройки Новосибирска, Лучшие новостройки"
        />
        <meta
          property="og:title"
          content="Новостройки Новосибирска: 🏢 купить квартиру в новостройке от застройщика, продажа недвижимости в строящемся доме, цены"
        />
        <meta
          property="og:description"
          content="⭐ Новостройки Новосибирска по ценам от застройщиков! ➔ Без переплаты ✅ Бесплатно оформим ипотеку со сниженной ставкой. ➔ Все новостройки города. ☎️️ Звоните, отправляйте онлайн заявку."
        />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={new Date().toISOString()} />
        <meta property="article:modified_time" content={new Date().toISOString()} />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:url" content="https://novostroiki-54.ru/" />
        <meta property="og:site_name" content="Новостройки в Новосибирске - Новостройки в Новосибирске" />
        <meta property="og:image" content="/static/images/cover.jpeg" key="og:image" />
        <meta property="twitter:image" content="/static/images/cover.jpeg" key="twitter:image" />
        <meta
          property="twitter:title"
          content="Новостройки Новосибирска: 🏢 купить квартиру в новостройке от застройщика, продажа недвижимости в строящемся доме, цены"
        />
        <meta
          property="twitter:description"
          content="⭐ Новостройки Новосибирска по ценам от застройщиков! ➔ Без переплаты ✅ Бесплатно оформим ипотеку со сниженной ставкой. ➔ Все новостройки города. ☎️️ Звоните, отправляйте онлайн заявку."
        />
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://novostroiki-54.ru/" />
        <link rel="icon" href="https://novostroiki-54.ru/favicon.ico" type="image/x-icon" />
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

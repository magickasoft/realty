import React from 'react';
import Head from 'next/head';
import {Events, scrollSpy} from 'react-scroll';
import {ListOfBuildings, Intro, Worth, Contact} from '../components';

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
      <Intro />
      <Worth />
      <ListOfBuildings />
      <Contact />
    </>
  );
}

export default Home;

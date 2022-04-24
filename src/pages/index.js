import React from 'react';
import Head from 'next/head';
import {Element, Events, scrollSpy} from 'react-scroll';
import {ContactForm, ListOfBuildings, Page, Intro, Banner} from '../components';

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
      <Element name="offers">
        <ListOfBuildings />
      </Element>
      <Element name="contact">
        <Page>
          <Banner
            label="НЕ НАШЛИ ПОДХОДЯЩУЮ КВАРТИРУ?"
            text="На сайте не весь каталог. Укажите параметры, мы подберем вам идеальную квартиру бесплатно!"
          />
          <ContactForm />
        </Page>
      </Element>
    </>
  );
}

export default Home;

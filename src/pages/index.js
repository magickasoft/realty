import Head from 'next/head';
import Image from 'next/image';
import {Page} from '../components';

export default function Home() {
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
      <Page
        label="Сайт закрыт на техническое обслуживание"
        text="В данный момент сайт находится на реконструкции или в разработке. Приносим свои извинения за временные неудобства."
      />
    </>
  )
}

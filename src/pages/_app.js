import React from 'react';
import Script from 'next/script';
import Head from 'next/head';
import Router, {useRouter} from 'next/router';
import {Header} from '../components';
import {pageview, GA_MEASUREMENT_ID} from '../helpers/gtag';
import {withYM, YA_METRIKA_ID} from '../helpers/ym';
import {ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';
import {CacheProvider} from '@emotion/react';
import theme from '../styles/theme';
import {GlobalStyle} from '../styles';
import {createEmotionCache} from '../helpers/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

function App({Component, emotionCache = clientSideEmotionCache, pageProps}) {
  const router = useRouter();
  React.useEffect(() => {
    const handleRouteChange = url => pageview(url);
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <CacheProvider value={emotionCache}>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <GlobalStyle />
      <Head>
        <title>
          Новостройки Новосибирска: 🏢 купить квартиру в новостройке от застройщика, продажа недвижимости в строящемся
          доме, цены
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default withYM(YA_METRIKA_ID, Router)(App);

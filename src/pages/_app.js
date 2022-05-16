import React from 'react';
import Script from 'next/script';
import Router, {useRouter} from 'next/router';
import {Header} from '../components';
import {pageview, GA_MEASUREMENT_ID} from '../helpers/gtag';
import {withYM, YA_METRIKA_ID} from '../helpers/ym';
import {GlobalStyle} from '../theme';

function App({Component, pageProps}) {
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
    <>
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
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default withYM(YA_METRIKA_ID, Router)(App);

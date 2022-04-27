import Script from 'next/script';
import {useRouter} from 'next/router';
import React from 'react';
import '../styles/globals.css';
import {Header} from '../components';
import {pageview} from '../helpers/ga';

function MyApp({Component, pageProps}) {
  const router = useRouter();

  React.useEffect(() => {
    const handleRouteChange = url => pageview(url);
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.gaMeasurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.gaMeasurementId}');
        `}
      </Script>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

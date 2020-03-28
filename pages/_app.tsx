// import App from 'next/app'
import Header from '@kuru/components/Header';
import Footer from '@kuru/components/Footer';
import OpenGraphMeta from '@kuru/components/OpenGraphMeta';
import TwitterMeta from '@kuru/components/TwitterMeta';

import Head from 'next/head';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="Anime social network for all your needs!" />
        <link rel="icon" type="image/x-icon" href="https://example.com/favicon.ico" />
        <link rel="icon" type="image/png" href="https://example.com/favicon.png" />
        <OpenGraphMeta />
        <TwitterMeta />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp

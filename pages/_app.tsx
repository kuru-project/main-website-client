// ANCHOR Components
import Header from '@kuru/components/Header';
import Footer from '@kuru/components/Footer';
import OpenGraphMeta from '@kuru/components/OpenGraphMeta';
import TwitterMeta from '@kuru/components/TwitterMeta';

// ANCHOR Utilities
import Head from 'next/head';

// ANCHOR Ant Style
import 'antd/dist/antd.css';

import { Layout as LayoutAnt } from 'antd';
const { Content: ContentAnt } = LayoutAnt;

import '../styles.css';

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
      <LayoutAnt>
        <Header />
        <ContentAnt>
          <Component {...pageProps} />
        </ContentAnt>
        <Footer />
      </LayoutAnt>
    </>
  )
}

export default MyApp

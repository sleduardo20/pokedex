import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import GlobalStyles from 'styles/GlobalStyles';
import theme from '../styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Pokedex</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="description" content="Project Pokedex" />
        </Head>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default App;

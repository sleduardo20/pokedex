import { AppProps } from 'next/app';
import Head from 'next/head';
import { ToastProvider } from 'react-toast-notifications';
import NextProgressBar from 'nextjs-progressbar';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/GlobalStyles';
import theme from '../styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <Head>
          <title>Pokedex</title>
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="shortcut icon"
            href="/img/favicon.png"
            type="image/x-icon"
          />
          <meta name="description" content="Project Pokedex" />
        </Head>
        <Component {...pageProps} />
        <NextProgressBar
          color="#003A70"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
        />
        <GlobalStyles />
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;

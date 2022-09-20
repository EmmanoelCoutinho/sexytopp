import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Store, persistor } from '../redux/store';

import { AllProviders } from '../utils/AllProviders';

import Head from 'next/head';

import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AllProviders>
      <Head>
        <title>Sexy Topp</title>
        <link rel="icon" href="/assets/images/favicon.png"></link>
      </Head>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyles />
          <ToastContainer />
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </AllProviders>
  );
}

export default MyApp;

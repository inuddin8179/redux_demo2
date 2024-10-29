import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { makeStore } from '../lib/store/store';
import { useRef } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const storeRef = useRef(makeStore());

  return (
    <Provider store={storeRef.current}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

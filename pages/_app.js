// pages/_app.js
import { useEffect } from 'react';
import '../styles/globals.css';
import GTMProvider from '../components/GTMProvider';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GTMProvider />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
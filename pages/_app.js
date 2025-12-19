// pages/_app.js
import { useEffect } from 'react';
import '../styles/globals.css';
import GTMProvider from '../components/GTMProvider';

// Polyfill di localStorage in ambienti dove non è disponibile o è incompleto
if (typeof window !== 'undefined') {
  const hasValidLocalStorage =
    window.localStorage &&
    typeof window.localStorage.getItem === 'function' &&
    typeof window.localStorage.setItem === 'function';

  if (!hasValidLocalStorage) {
    const memoryStore = {};
    window.localStorage = {
      getItem: (key) => (key in memoryStore ? memoryStore[key] : null),
      setItem: (key, value) => {
        memoryStore[key] = String(value);
      },
      removeItem: (key) => {
        delete memoryStore[key];
      },
      clear: () => {
        Object.keys(memoryStore).forEach((k) => delete memoryStore[k]);
      },
      key: (index) => Object.keys(memoryStore)[index] || null,
      get length() {
        return Object.keys(memoryStore).length;
      }
    };
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GTMProvider />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

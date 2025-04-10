// pages/_app.js
import '../styles/globals.css'
import GoogleTagManager from '../components/GoogleTagManager'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleTagManager />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      <title>Nicholas Nguyen - Personal Page</title>
      <meta name="description" content="WIP Portfolio, feel free to look around!" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="./favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp

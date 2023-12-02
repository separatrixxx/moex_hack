import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MOEX Hack</title>
        <meta name='description' content='MOEX Hack' />
        <meta property='og:title' content='MOEX Hack' />
        <meta property='og:description' content='MOEX Hack' />
        <meta charSet="utf-8" />
        <link rel="icon" href="/vercel.svg" type='image/svg+xml' />
      </Head>
      <Component {...pageProps} />
    </>

  );
}

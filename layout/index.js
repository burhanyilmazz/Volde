import { useEffect } from 'react';
import Head from 'next/head'
import { Header, Footer } from '../components';

export const Layout = (props) => { 
  return (
    <>
      <Head>
        <title>Volde</title>
        <meta name="description" content="Volde" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  )
}
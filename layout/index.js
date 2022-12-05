import { useEffect, useState } from 'react';
import Head from 'next/head'
import { Header, Footer, Sidebar, MobileNav, Hamburger } from '../components';

import { navlist } from '../utils/Nav';

export const Layout = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    document.querySelector('html').classList.remove('disable-scroll')
  }, [])

  const handleOnClickNav = (event) => {
    event 
      ? document.querySelector('html').classList.add('disable-scroll') 
      : document.querySelector('html').classList.remove('disable-scroll')
    setSidebarOpen(event)
  }

  return (
    <>
      <Head>
        <title>Volde</title>
        <meta name="description" content="Volde" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hamburger onClick={(event) => handleOnClickNav(event)}/>
      <Sidebar nav={navlist} isShow={sidebarOpen} outsideClick={(event) => handleOnClickNav(event)} />
      <MobileNav nav={navlist} isShow={sidebarOpen} />
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  )
}
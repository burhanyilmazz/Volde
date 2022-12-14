import {useRouter} from 'next/router'
import { useEffect, useState } from 'react';
import Head from 'next/head'
import { Header, Footer, Sidebar, MobileNav, Hamburger, SearchBar, Icon } from '../components';

import styles from './Layout.module.scss';

export const Layout = ({navlist, children}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const router = useRouter()

  useEffect(() => {
    document.querySelector('html').classList.remove('disable-scroll')
    document.body.classList.remove("paddless");
  }, [])

  const handleOnClickNav = (event) => {
    event 
      ? document.querySelector('html').classList.add('disable-scroll') 
      : document.querySelector('html').classList.remove('disable-scroll')
    setSidebarOpen(event)
    setSearchOpen(false)
  }

  const handleOnClickSearch = (event) => {
    event 
      ? document.querySelector('html').classList.add('disable-scroll') 
      : document.querySelector('html').classList.remove('disable-scroll')
    setSidebarOpen(false)
    setSearchOpen(event)
  }

  useEffect(() => {
    setSidebarOpen(false)
    setSearchOpen(false)
    document.querySelector('html').classList.remove('disable-scroll')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath])
  
  return (
    <>
      <Head>
        <title>Volde</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <meta name="description" content="Volde" />
      </Head>

      <Header />
      <Hamburger isOpen={sidebarOpen} onClick={(event) => handleOnClickNav(event)}/>
      <Sidebar nav={navlist} isShow={sidebarOpen} outsideClick={(event) => handleOnClickNav(event)} />
      <MobileNav nav={navlist} isShow={sidebarOpen} />
      <div className={styles['search']} onClick={() => handleOnClickSearch(!searchOpen)}>
        <Icon icon={'search'} />
      </div>
      <SearchBar isShow={searchOpen} outsideClick={(event) => handleOnClickSearch(event)} />
      <main>
        {children}
      </main>
      <Footer navlist={navlist} />
    </>
  )
}
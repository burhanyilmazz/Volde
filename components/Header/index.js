import { useState } from 'react';

import { Logo, Hamburger } from '../';

import styles from './Header.module.scss';

export const Header = () => { 
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className={styles['header']}>
      <div className={styles['logo']}>
        <Logo />
      </div>
      <Hamburger onClick={(event) => setIsOpen(event)}/>
    </header>
  )
}

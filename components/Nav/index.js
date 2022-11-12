import Link from 'next/link'

import styles from './Nav.module.scss';

export const Nav = () => { 
  return (
    <nav className={styles['nav']}>
      <Link href='/volde-one'>Volde One</Link>
      <Link href='/our-story'>Our Story</Link>
      <Link href='/the-team'>The Team</Link>
    </nav>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames';

import { Nav, SocialMedia, Logo } from '../';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className={classNames('container-fluid', styles['container'])}>
        <div className={styles['footer__logo']}>
          <Link href='/'>
            <Image src={'/images/logo/logo-2.svg'} width={'140'} height={'40'} alt={'Volde'} />
          </Link>
        </div>
        <div className={styles['footer__nav']}>
          <Nav />
        </div>

        <div className={styles['footer__address']}>
          <span>Volde HQ</span>
          <p>Volde AG <br />
          Dufourstrasse 49 8008 Zürich<br />
          +41 44 688 01 68</p>

          <span>Volde ISTANBUL REPRESENTATION</span>
          <p>Torun Center, D-Blok, K:10 D:43<br />
          Sisli Istanbul<br />
          +90 212 922 15 23</p>
        </div>
        <div className={styles['footer__social-media']}>
          <SocialMedia />
        </div>
        <div className={styles['footer__copyright']}>
          Copyright &copy; 2022 Volde
        </div>
        <div className={styles['footer__terms']}>
          <Link href='/terms-of-service'>Terms of Service</Link>
          <Link href='/privacy-policy'>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
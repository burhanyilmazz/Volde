import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames';
import slug from 'slug'

import { SocialMedia, Logo, Newsletter, Library } from '../';

import { navlist } from '../../utils/Nav';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <>
      <section className={styles['foot']}>
        <Newsletter />
        <Library />
      </section>
      <footer className={styles['footer']}>
        <div className={classNames('container-fluid', styles['container'])}>
          <nav className={styles['nav']}>
            {
              navlist.map((item, index) => {
                return (
                  <div key={index}>
                    <h6>{item.title}</h6>
                    <ul>
                      {
                        item.children.map((child, i) => {
                          return (
                            <li key={i}><Link href={slug(`${item.folder}`) + '//' + slug(`${child.title}-${child.id}`)}>{child.title}</Link></li>
                          )
                        })
                      }
                    </ul>
                  </div>
                )
              })
            }
            <div>
              <ul>
                <li><Link href='/kariyer'>Kariyer</Link></li>
                <li><Link href='/blog'>Blog</Link></li>
                <li><Link href='/iletisim'>İletişim</Link></li>
              </ul>
            </div>
          </nav>
          <div className={styles['social-media']}>
            <SocialMedia />
          </div>
          <div className={styles['logo']}>
            <Logo />
          </div>
          <div className={styles['copyright']}>
            Copyright &copy; 2022 VOLDE Tüm hakları saklıdır.
          </div>
          <div className={styles['policy']}>
            <ul>
              <li><Link href='/politikalarimiz'>Politikalarımız</Link></li>
              <li><Link href='/kisisel-verilerin-korunmasi'>Kişisel Verilerin Korunması</Link></li>
              <li><Link href='/cerez-politikasi'>Çerez Politikası</Link></li>
            </ul>
          </div>
          <div className={styles['fikirmod']}>
            <a href='https://wwww.fikirmod.com.tr' target='_blank' title='Fikirmod' rel="noreferrer"><Image src={'/images/fikirmod.svg'} width={20} height={23} alt='Fikirmod' /></a>
          </div>
        </div>
      </footer>
    </>
  )
}
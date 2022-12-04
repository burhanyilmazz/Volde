import classNames from 'classnames';
import { Logo, Hamburger } from '../';

import styles from './Header.module.scss';

export const Header = (props) => { 
  const {onClickNav, className} = props;
  const handleOnClickNav = (event) => onClickNav && onClickNav(event)
  return (
    <header className={classNames(styles['header'], className)}>
      <div className={styles['logo']}>
        <Logo />
      </div>
      <Hamburger onClick={(event) => handleOnClickNav(event)}/>
    </header>
  )
}

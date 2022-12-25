import classNames from 'classnames';
import PropTypes from 'prop-types';
import Image from 'next/image'

import {Button} from ".."
import styles from './Library.module.scss';

export const Library = (props) => { 
  const { className } = props;
  
  return (
    <div className={classNames(styles['library'], className)}>
      <div className={styles['container']}>
        <span>Dijital<br />Kütüphane</span>
        <p>Güncel ürün kataloğumuz için lütfen aşağıdaki butona tıklayınız.</p>
        <div className={styles['button']}>
          <Button text={'İndir'} href='#' download />
        </div>
      </div>
      <div className={styles['image']}>
        <Image src={'/images/footer/digital.png'} width={'224'} height={'273'} alt={'Volde Dijital Kütüphane'} fetchpriority="high" />
      </div>
    </div>
  )
}

Library.propTypes = {
	className: PropTypes.string,
};
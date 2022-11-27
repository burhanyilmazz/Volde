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
        <h5>Dijital<br />Kütüphane</h5>
        <p>Güncel ürün kataloğumuz için lütfen aşağıdaki butona tıklayınız.</p>
        <div className={styles['button']}>
          <Button text={'İndir'} href='#' />
        </div>
      </div>
      <div className={styles['image']}>
        <Image src={'/images/footer/digital.png'} width={'224'} height={'273'} alt={'Volde Dijital Kütüphane'} />
      </div>
    </div>
  )
}

Library.propTypes = {
	className: PropTypes.string,
};
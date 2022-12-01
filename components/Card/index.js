import classNames from 'classnames';
import PropTypes from 'prop-types';
import Image from 'next/image'
import Link from 'next/link'

import styles from './Card.module.scss';

export const Card = (props) => { 
  const { className } = props;
  
  return (
    <Link href={'#'} className={classNames(styles['card'], className)}>
      <figure>
        <picture>
          <Image src={'/images/img/blog.jpeg'} width={'330'} height={'320'} alt={'Volde Dijital Kütüphane'} />
        </picture>
        <figcaption>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
          <div className={styles['arrow']} />
        </figcaption>
      </figure>
    </Link>
  )
}

Card.propTypes = {
	className: PropTypes.string,
};
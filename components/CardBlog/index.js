import classNames from 'classnames';
import PropTypes from 'prop-types';
import Image from 'next/image'
import Link from 'next/link'

import styles from './CardBlog.module.scss';

export const CardBlog = (props) => { 
  const { className } = props;
  
  return (
    <Link href={'#'} className={classNames(styles['card-blog'], className)}>
      <figure>
        <picture>
          <Image src={'/images/img/blog.jpeg'} width={'501'} height={'247'} alt={'Volde Dijital Kütüphane'} />
        </picture>
        <figcaption>
          <h6>10 Ağustos 2022</h6>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
          <div className={styles['arrow']} />
        </figcaption>
      </figure>
    </Link>
  )
}

CardBlog.propTypes = {
	className: PropTypes.string,
};
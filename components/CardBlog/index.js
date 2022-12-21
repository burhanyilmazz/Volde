import classNames from 'classnames';
import PropTypes from 'prop-types';
import Image from 'next/image'
import Link from 'next/link'

import styles from './CardBlog.module.scss';

export const CardBlog = (props) => { 
  const { className, data, path } = props;
  
  return (
    <Link href={path} className={classNames(styles['card-blog'], className)}>
      <figure>
        <picture>
          <Image src={data?.image} width={'501'} height={'247'} alt={data?.title} />
        </picture>
        <figcaption>
          <span>10 Ağustos 2022</span>
          <h3>{data?.title}</h3>
          <div className={styles['arrow']} />
        </figcaption>
      </figure>
    </Link>
  )
}

CardBlog.propTypes = {
	className: PropTypes.string,
	path: PropTypes.string,
};

CardBlog.defaultProps = {
	path: '#',
};
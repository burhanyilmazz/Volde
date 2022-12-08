import classNames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import slug from 'slug'

import styles from './LeftNav.module.scss';

export const LeftNav = (props) => { 
  const { data, title } = props;

  return (
    <div className={classNames(styles['left-nav'])}>
      <div className={styles['left-nav__button']}>
        <span>{title || data.title}</span>
        <div className={styles['hamburger']}>
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className={styles['content']}>
        <h3>{title || data.title}</h3>
        <ul>
          { data.children.map((item, index) => <li key={index}><Link href={`${data.folder}/${slug(item.title)}-${item.id}`}>{item.title}</Link></li>)}
        </ul>
      </div>
    </div>
  )
}

LeftNav.propTypes = {
	data: PropTypes.object,
	title: PropTypes.object,
};
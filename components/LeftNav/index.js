import {useRouter} from 'next/router'
import classNames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import slug from 'slug'

import styles from './LeftNav.module.scss';

export const LeftNav = (props) => { 
  const { data, title, folder } = props;
  const router = useRouter()
  const id = router.query.slug.split('-').slice(-1)[0];
  const id2 = router.query.slug.split('-').slice(-2)[0];
  const pageId = id2 ? id2 : id;

  return (
    <div className={classNames(styles['left-nav'])}>
      <div className={styles['left-nav__button']}>
        <span>{title || data?.title}</span>
        <div className={styles['hamburger']}>
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className={styles['content']}>
        <h3>{title || data?.title}</h3>
        <ul>
          { data?.children?.map((item, index) => {
            const url =  folder ? `${folder}/${slug(item.title)}-${item.id}-${data.id}` : `/${data.folder}/${slug(item.title)}-${item.id}`
            return <li key={index}><Link href={url} className={classNames({[styles['active']]: pageId == item.id})} >{item.title}</Link></li>
          })}
        </ul>
      </div>
    </div>
  )
}

LeftNav.propTypes = {
	data: PropTypes.object,
	title: PropTypes.object,
	folder: PropTypes.string,
};
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link'

import {Icon} from "../"
import styles from './Breadcrumb.module.scss';

export const Breadcrumb = (props) => { 
  const { className, data } = props;
  
  return (
    <ul className={classNames(styles['breadcrumb'], className)}>
      {
        data?.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.href}>
                {item.title}
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}

Breadcrumb.propTypes = {
  className: PropTypes.string,
	data: PropTypes.array,
};
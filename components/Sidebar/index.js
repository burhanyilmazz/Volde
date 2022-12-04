import classNames from 'classnames';
import PropTypes from 'prop-types';

import {Icon} from "../"
import styles from './Sidebar.module.scss';

export const Sidebar = (props) => { 
  const { className } = props;
  
  return (
    <aside className={classNames(styles['sidebar'], className)}>
      
    </aside>
  )
}

Sidebar.propTypes = {
	className: PropTypes.string,
};
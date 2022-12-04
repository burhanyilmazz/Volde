import classNames from 'classnames';
import PropTypes from 'prop-types';

import {Icon} from ".."
import styles from './ShareMedia.module.scss';

export const ShareMedia = (props) => { 
  const { className } = props;
  
  return (
    <div className={classNames(styles['share'], className)}>
      <h2>Paylaş</h2>
      <ul>
        <li><a href="#" target="_blank" aria-label='Volde Twitter' rel="noreferrer"><Icon icon="twitter" /></a></li>
        <li><a href="#" target="_blank" aria-label='Volde Facebook' rel="noreferrer"><Icon icon="facebook" /></a></li>
        <li><a href="#" target="_blank" aria-label='Volde Linkedin' rel="noreferrer"><Icon icon="linkedin" /></a></li>
      </ul>
    </div>
  )
}

ShareMedia.propTypes = {
	className: PropTypes.string,
};
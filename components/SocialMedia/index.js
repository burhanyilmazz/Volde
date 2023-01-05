import classNames from 'classnames';
import PropTypes from 'prop-types';

import {Icon} from "../"
import styles from './SocialMedia.module.scss';

export const SocialMedia = (props) => { 
  const { className } = props;
  
  return (
    <div className={classNames(styles['social-media'], className)}>
      <ul>
        <li><a href="https://www.linkedin.com/company/voldeglobal/?viewAsMember=true" target="_blank" aria-label='Volde Linkedin' rel="noreferrer"><Icon icon="linkedin" /></a></li>
        <li><a href="https://www.youtube.com/channel/UCcXqZk3MYmd8VvP9-339yWg" target="_blank" aria-label='Volde Youtube' rel="noreferrer"><Icon icon="youtube" /></a></li>
        <li><a href="https://twitter.com/voldeglobal" target="_blank" aria-label='Volde Twitter' rel="noreferrer"><Icon icon="twitter" /></a></li>
      </ul>
    </div>
  )
}

SocialMedia.propTypes = {
	className: PropTypes.string,
};
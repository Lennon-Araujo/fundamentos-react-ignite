import styles from './Avatar.module.css';
import PropTypes from 'prop-types';

export function Avatar({src, isComment}) {
  return (
    <img
      className={isComment ? styles.avatarWithoutBorder : styles.avatar}
      src={src}
    />
  )
}

Avatar.propTypes = {
  src: PropTypes.string,
  isComment: PropTypes.bool
}

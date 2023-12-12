import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ src, alt, size }) => {
  const avatarStyle = {
    width: size,
    height: size,
    borderRadius: '50%',
    objectFit: 'cover',
  };

  return (
    <img src={src} alt={alt} style={avatarStyle} />
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.string,
};

Avatar.defaultProps = {
  alt: 'User Avatar',
  size: '50px',
};

export default Avatar;
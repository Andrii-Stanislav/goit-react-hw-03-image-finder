import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, alt, largePhoto }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={image}
        alt={alt}
        className="ImageGalleryItem-image"
        datalarge={largePhoto}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largePhoto: PropTypes.string.isRequired,
};

export default ImageGalleryItem;

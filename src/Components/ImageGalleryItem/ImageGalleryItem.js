import React from 'react';
import PropTypes from 'prop-types';

import Loader from 'react-loader-spinner';

const ImageGalleryItem = ({ image, alt, largePhoto }) => {
  return (
    <li className="ImageGalleryItem">
      <Loader type="Oval" color="#3f51b5" className="ImageGalleryItem-loader" />
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

import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({photos, query, onClick}) => {
    return  <ul className="ImageGallery" onClick={ onClick }>
        {photos.map((photo) => (
            <ImageGalleryItem key={ photo.id } image={ photo.webformatURL} alt={query} largePhoto={photo.largeImageURL} />
        )  
        )}
    </ul>  
}

ImageGallery.propTypes = {
    photos: PropTypes.array.isRequired,
    query: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}
             
export default ImageGallery;
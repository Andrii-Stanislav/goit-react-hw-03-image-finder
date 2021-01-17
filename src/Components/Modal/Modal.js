import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import Loader from 'react-loader-spinner';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.closeEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeEscape);
  }

  closeEscape = e => {
    if (e.code === 'Escape') {
      this.props.onClose(e);
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.props.onClose}>
        <div className="Modal">
          <Loader
            type="Oval"
            color="#3f51b5"
            className="ImageGalleryItem-loader"
          />
          <img
            className="Modal-image"
            src={this.props.largePhoto}
            alt={this.props.alt}
          />
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  largePhoto: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;

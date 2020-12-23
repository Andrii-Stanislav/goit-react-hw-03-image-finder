import React, { Component }from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';


const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    state = {}
    
    componentDidMount() {
        window.addEventListener('keydown',this.closeEscape)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.closeEscape)
    }
    
    closeEscape = (e) => {
        if (e.code === 'Escape') {
            this.props.onClose(e);
        }
    }

    render() { 
        return createPortal(<div className="Overlay" onClick={ this.props.onClose }>
        <div className="Modal">
            <img src={ this.props.largePhoto } alt={ this.props.alt }  />
        </div>
    </div>, modalRoot)
    }
}

Modal.propTypes = {
    largePhoto: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
}

export default Modal;
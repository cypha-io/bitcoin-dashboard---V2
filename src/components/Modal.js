import React from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="Modal-overlay">
            <div className="Modal">
                <button className="Modal-close" onClick={onClose}>×</button>
                {children}
            </div>
        </div>
    );
}

export default Modal;

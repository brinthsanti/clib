import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import './modal.scss';
const Modal = ({ showModal, toggler, children}) => {
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            toggler();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    });

    return ReactDOM.createPortal(showModal && (
        <div className="modalContainer">
            <div ref={ref} className="modalWrapper">
            {children}
            </div>
        </div>
    ), document.getElementById('portal'))
};

export default Modal;
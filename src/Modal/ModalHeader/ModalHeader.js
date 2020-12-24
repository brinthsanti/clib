import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';

import './header.scss';
const ModalHeader = ({children, toggler}) => {
    return (
        <div className="modalHeaderWrapper">
            <div className="modalHeaderContent">
            {children}
            </div>
            <div onClick={toggler} className="modalCancel">
            <FaTimesCircle/>
            </div>
        </div>
    );
};

export default ModalHeader;
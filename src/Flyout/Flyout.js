import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './flyout.scss';

import { FaTimesCircle } from 'react-icons/fa';

const Flyout = ({ header, children, showFlyout, toggler }) => {

    function handleCancel() {
        toggler();
    }
    return (
        (showFlyout ) && (
            <div className="flyout_Container">
                <div className="flyout_Wrapper">
                    <div className="flyout_Header">
                        <div>{header}</div>
                        <div onClick={handleCancel}><FaTimesCircle /></div>
                    </div>
                    <div className="flyout_Body">
                        {children}
                    </div>
                </div>
            </div>
        )
    );
};

Flyout.propTypes = {
    
};

export default Flyout;
import React, { Component } from 'react';
import rightArrow from '../assets/next.png';
import downArrow from '../assets/arrow-down-sign-to-navigate.png';

class AccordionPanelTitle extends Component {
    render() {
        const { toggleHandler, show, title } = this.props;
        return (
            <div onClick={toggleHandler} className="titlewrapper" data-title="titleWrapper">
                <img src={show ? downArrow : rightArrow } alt="indicator" />
                <span>{title}</span>
            </div>
        );
    }
}

export default AccordionPanelTitle;
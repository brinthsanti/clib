import React, { Component } from 'react';

class AccordionPanelContent extends Component {
    render() {
        const { show, content } = this.props;
        return (
        
            show ? <div className="contentWrapper">
                <p>{content}</p>
            </div> : null
        
            
        );
    }
}

export default AccordionPanelContent;
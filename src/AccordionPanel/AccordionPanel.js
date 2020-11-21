import React, { Component } from 'react';
import './accordion.scss';


import AccordionPanelTitle from './components/AccordionPanelTitle';
import AccordionPanelContent from './components/AccordionPanelContent';

class AccordionPanel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showContent: false,
        }

        this.toggleShowContent = this.toggleShowContent.bind(this);
    }

    toggleShowContent() {
        const { showContent } = this.state;
        this.setState({
            showContent: !showContent,
        })
    }

    render() {
        const { showContent } = this.state;
        const { title, content, dynamicToggle, show } = this.props;
        return (
            <div className="accordionContainer">
                <AccordionPanelTitle show={dynamicToggle ? show : showContent} title={title} toggleHandler={this.toggleShowContent}/>
                <AccordionPanelContent show={dynamicToggle ? show : showContent} content={content}/>
            </div>
        );
    }
}

export default AccordionPanel;
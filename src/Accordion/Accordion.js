import React, { Component } from 'react';
import './accordion.scss';


import AccordionContent from './components/AccordionContent';
import AccordionTitle from './components/AccordionTitle';

class Accordion extends Component {

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
                <AccordionTitle show={dynamicToggle ? show : showContent} title={title} toggleHandler={this.toggleShowContent}/>
                <AccordionContent show={dynamicToggle ? show : showContent} content={content}/>
            </div>
        );
    }
}

export default Accordion;
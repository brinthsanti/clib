import React, { Component } from "react";

import AccordionPanel from "../AccordionPanel";


class Accordion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accordionData: [],
        }

      
        this.clickHandler = this.clickHandler.bind(this);
    }


    componentDidMount() {
      const { data } = this.props;
      let dataState = null;
      if(data && data.length > 0 && !data[0].show) {
          if(data.length === 1) {
            dataState = data.map(value => ({ ...value, show: true }));
          }else {
            dataState = data.map(value => ({ ...value, show: false }))
          }

        this.setState({
            accordionData: dataState,
        }) 
    }
 }

    clickHandler(event) {
        if (event.target.dataset.title === 'titleWrapper') {
            const { accordionData } = this.state;
            const currentPanelTitle = event.nativeEvent.target.innerText;

            //set all old state to false
            accordionData.forEach(data => {
                data.show = false;
            })
            const result = accordionData.find(value => value.title === currentPanelTitle);
            result.show = true;
            this.setState({
                ...accordionData, result
            })
        }
    }

  render() {
    const { accordionData } = this.state;
    return (
      <div onClick={this.clickHandler} >
        {accordionData.length > 0
          ? accordionData.map(panelData => {
              return (
                <AccordionPanel
                  key={panelData.title}
                  title={panelData.title}
                  content={panelData.content}
                  dynamicToggle={true}
                  show={panelData.show}
                />
              );
            })
          : null}
      </div>
    );
  }
}

export default Accordion;

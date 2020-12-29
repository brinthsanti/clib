import React, { useState, useEffect, useRef } from "react";
import classNames from 'classnames';

import "./tooltip.scss";

const ToolTip = ({ children, content }) => {
  const [showTooltip, setShowToolTip] = useState(false);
  const [moveBottom, setMoveBottom] = useState(false);

  const [refElement, setRefElement] = useState(null);

  function toggler() {
    setShowToolTip(!showTooltip);
  }

  useEffect(() => {
    let intersectionObserver = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) {
        setMoveBottom(!moveBottom);
      }
    });

    if (refElement) intersectionObserver.observe(refElement);

    return () => {
      if (refElement) intersectionObserver.unobserve(refElement);
    };
  },[setMoveBottom, refElement]);



  return (
    <div className="tooltipContainer">
      <div
        className="referenceWrapper"
        onMouseEnter={toggler}
        onMouseLeave={toggler}
      >
        {children}
        {showTooltip && (
          <div ref={setRefElement}  className={classNames('tooltip', { moveBottom: moveBottom })}>
            {content}
            <span  className={classNames('arrow', { pointDown: moveBottom })}></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolTip;

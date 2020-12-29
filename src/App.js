import React, { useState } from 'react';

import { Modal, ModalHeader } from './Modal';
import './App.scss';
import ToolTip from './ToolTip';


function App() {

  const [showModal, setShowModal] = useState(false);

  function toggler() {
    setShowModal(!showModal);
  }

  return (
    <div className="App">

      <div className="temp"> header container</div>
      <button onClick={toggler}>modal toggler</button>
      <div>
        How to Center a Div Vertically and Horizontally with Flexbox
        Flexbox is the easiest way to center an element both vertically and horizontally.
        
        This is really just a combination of the two previous Flexbox methods. Then apply justify-content: center and align-items: center to center the child element(s) horizontally and vertically:
</div>

      <Modal showModal={showModal} toggler={toggler}>
        <ModalHeader toggler={toggler}>
          hello header
  </ModalHeader>
      </Modal>




      <section>
        <div className="secContainer">
          <div>Sec A
By default disabled elements like  do not trigger user interactions so a Tooltip will not activate on normal events like hover. To accommodate disabled elements, add a simple wrapper element, such as a span.
</div>
          <div>

            
           <p>
           Sec B
By default disabled elements like  do not trigger user interactions so a Tooltip will not activate on normal events like hover. To accommodate disabled elements, add a simple wrapper element, such as a span.
           </p>
           <div style={{height: '200vh',}}>ladnfl</div>
                             <ToolTip content="tooltip content">
  <div>
    Hey i'm the reference elementHey i'm the reference element
  </div>
</ToolTip>

</div>
          {/* <div>Sec C
By default disabled elements like  do not trigger user interactions so a Tooltip will not activate on normal events like hover. To accommodate disabled elements, add a simple wrapper element, such as a span.
</div> */}
        </div>
      </section>

<div style={{height: '200vh',}}></div>
      <div className="temp"> footer container</div>
    </div>
  );
}

export default App;

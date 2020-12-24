import React , { useState} from 'react';

import {Modal, ModalHeader} from './Modal';
import './App.scss';


function App() {

  const [ showModal , setShowModal] = useState(false);

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

      <div className="temp"> footer container</div>
    </div>
  );
}

export default App;

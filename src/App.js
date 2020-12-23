import React , { useState} from 'react';

import Flyout from './Flyout';
import './App.scss';


function App() {

   const [showFlyout, setShowFlyout] = useState(false);

   function flyOutToggler() {
    setShowFlyout(!showFlyout)
   }

  return (
    <div className="App">

    <div className="temp"> header container</div>
      <div className="myflyout">
      hello<br/>
      <button onClick={flyOutToggler}
        >toggle flyout</button>
        <Flyout header={'hello world'} showFlyout={showFlyout} toggler={flyOutToggler} >
        <button>testing</button>
        hello
        another testing
        </Flyout>
      </div>
      <div className="temp"> footer container</div>
    </div>
  );
}

export default App;

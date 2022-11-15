import React from 'react';
import './App.css';

import {Timer} from './hooks/useState';
import {SelectingEl} from './hooks/useRef';

function App() {
  return (
    <div className="App">
      {/* <Timer title =  'React useState Hook'/> */}
      <SelectingEl />
    </div>
  );
}

export default App;

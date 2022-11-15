import React from 'react';
import './App.css';

import {Timer} from './hooks/useState';
import {SelectingEl} from './hooks/useRef';
import UseEffectComponent from './hooks/useEffect';

function App() {
  return (
    <div className="App">
      {/* <Timer title =  'React useState Hook'/> */}
      {/* <SelectingEl title='React useRef and useEffect Hook' /> */}
      <UseEffectComponent title='React useEffect and useLayoutEffect' />
    </div>
  );
}

export default App;

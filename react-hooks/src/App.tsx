import React from 'react';
import './App.css';

import {Timer} from './hooks/useState';
import {SelectingEl} from './hooks/useRef';
import UseEffectComponent from './hooks/useEffect';
import {UseReducerComponent} from './hooks/useReducer';
import {UseContextComponent} from './hooks/useContext';

function App() {
  return (
    <div className="App">
      {/* <Timer title =  'React useState Hook'/> */}
      {/* <SelectingEl title='React useRef and useEffect Hook' /> */}
      {/* <UseEffectComponent title='React useEffect and useLayoutEffect' /> */}
      {/* <UseReducerComponent title='React useReducer hook'/> */}
      <UseContextComponent title='React useContext hook' />
    </div>
  );
}

export default App;

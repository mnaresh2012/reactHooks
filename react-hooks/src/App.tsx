import React, {createContext} from 'react';
import './App.css';

import {UseState} from './components/useState';
import {UseEffect} from './components/useEffect';
import {Usereducer} from './components/useReducer';
import { UseContext } from './components/useContext';

export const AppContext = createContext({title: ''});

interface UseContextComponentProps {
  title: string;
}

function App({title}:UseContextComponentProps) {
  const Description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis soluta facere, accusamus mollitia officiis sequi cupiditate nobis porro minus totam odit sunt, aspernatur dolores fugiat, modi nisi aliquam aperiam iste.';
  return (
    <div className="App">
      <h2>ReactJS Hooks Deatails</h2>
      <p>
        <s>useState, useEffect,</s> useReducer, useRef, forwardRefs, useContext, useCallback, useMemo
      </p>

      <hr />

      {/* <UseState info = {Description} /> */}
      {/* <UseEffect /> */}
      {/* <Usereducer /> */}
      <AppContext.Provider value={{title: 'Hello from Context API'}}>
        <UseContext />
      </AppContext.Provider>
    </div>
  );
}

export default App;

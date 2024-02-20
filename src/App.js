import logo from './logo.svg';
import './App.css';
import React from 'react';
import Draggable from 'react-draggable';
// import Data from './Data.js';
import { useState } from 'react';

import { Data } from './Data';
import DraggableInputs from './DraggableInputs';
import Droppable from './Droppable';
function App() {

  const [selectedDiv ,  setSelectedDiv] = useState();
  console.log("data given ",selectedDiv);
  

  return(
    <>
    <DraggableInputs selectDiv={selectedDiv} setSelect={setSelectedDiv}/>
    <Droppable selectDiv={selectedDiv} setSelect={setSelectedDiv}/>
    </>
  )
  
}


export default App;

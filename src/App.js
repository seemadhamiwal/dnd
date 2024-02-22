import logo from './logo.svg';
import './App.css';
import React from 'react';
import Draggable from 'react-draggable';
// import Data from './Data.js';
import { useState } from 'react';
import DraggableInputs from './DraggableInputs';
import Droppable from './Droppable';

import { Data } from './Data';
function App() {

  const [selectedDiv ,  setSelectedDiv] = useState();
  console.log("data given ",selectedDiv);
  const positionXaxis = 100;
  const positionYaxis = 200;
  return(
    <>
    {/* <DraggableInputs selectDiv={selectedDiv} setSelect={setSelectedDiv}/> */}
    <Droppable />
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
    <button  type="button">Save</button> 
    </div>
    {/* <div className='canvas'>
            <Draggable
            defaultPosition={{x:x , y:y}}
            bounds={"parent"}
            handle=".drag1"
           >
            <div className="drag1" id="details">
                Name
            </div>

        </Draggable>
        <Draggable
            defaultPosition={{x:0 , y:0}}
            handle=".drag2"
            bounds={"parent" }
            
        
        
        
        >
            <div className="drag2" id="details">
                Image
            </div>

        </Draggable>
        <Draggable
            defaultPosition={{x:20 , y:45}}
            handle=".drag3"
            bounds={"parent" }
            
        
        
        
        >
            <div className="drag3" id="details">
                Designation
            </div>

        </Draggable>
        <Draggable
            defaultPosition={{x:50 , y:100}}
            handle=".drag4"
            bounds={{top:-1,left: -1, right: 755, bottom: 480} }
        
        
        
        >
            <div className="drag4" id="details">
                VIP
            </div>

        </Draggable>
        <Draggable
            defaultPosition={{x:positionXaxis , y:positionYaxis}}
            handle=".drag5"
            bounds={{top:210 + positionYaxis ,left: 100 + positionXaxis, right: 100 - positionXaxis, bottom:100 - positionYaxis} }
            
        
        
        
        >
            <div className="drag5" id="details">
                MVP
            </div>

        </Draggable>

        </div> */}
    </>
  )
  
}


export default App;

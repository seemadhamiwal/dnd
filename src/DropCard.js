import React from "react";
import { useRef } from "react";
import Draggable from "react-draggable";
const DropCard =()=>{
    <>

        <div className="canvas">
            <Draggable
            defaultPosition={{x:0 , y:0}}
            handle=".drag1"   
            bounds={"parent"}
        
        >
            <div className="drag1" id="details">
                Name
            </div>

        </Draggable>
        <Draggable
            defaultPosition={{x:0 , y:0}}
            handle=".drag2"
            
        
        
        
        >
            <div className="drag2" id="details">
                Name
            </div>

        </Draggable>
        <Draggable
            defaultPosition={{x:20 , y:45}}
            handle=".drag3"
            
        
        
        
        >
            <div className="drag3" id="details">
                Name
            </div>

        </Draggable>
        <Draggable
            defaultPosition={{x:50 , y:100}}
            handle=".drag4"
            
        
        
        
        >
            <div className="drag4" id="details">
                Name
            </div>

        </Draggable>
        <Draggable
            defaultPosition={{x:100 , y:200}}
            handle=".drag5"
            
        
        
        
        >
            <div className="drag5" id="details">
                Name
            </div>

        </Draggable>

        </div>
    </>
}

export default DropCard;
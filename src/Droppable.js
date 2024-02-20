import React, { useEffect } from "react";
import Draggable from "react-draggable";
import { useState } from "react";
const Droppable = ({selectDiv,setSelect}) =>{
    const [elements, setElements] = useState([]);


    const eventHandler = (e, data) => {
        console.log('Event Type', e.type);
        console.log({e, data});
      }
      const nodeRef = React.useRef(null);
      useEffect(()=>{
        if(selectDiv){
            
            setElements([...elements,selectDiv]);
        }
      },[selectDiv])
    console.log('content added' , elements);

    return(
        <div className="canvas" >
              <span ref={nodeRef}>
              
              <div className='canvas'>
              {
                elements.map((item) =>{
                    return (
                        <Draggable nodeRef={nodeRef}
              axis="both"
              handle=".handle"
              defaultPosition={{x: 0, y: 0}}
              position={null}
            //   grid={[25, 25]}
              scale={1}
              onStart={eventHandler}
              onDrag={eventHandler}  
              onStop={eventHandler}
              allowAnyClick={true}
              bounds="parent">
              <div>
                {(
                  <div className="handle" style={{border: "2px solid red", padding: "1rem", width:"20%"}}>
                    {item.name}
                    <span>        &#128465;</span>
                  </div>
                )}
              </div>
              </Draggable>
                    )
                })
              }
          </div>   
                </span>
              </div>
    )
}

export default Droppable;
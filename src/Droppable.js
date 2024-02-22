import React, { useEffect } from "react";
import Draggable from "react-draggable";
import { useState } from "react";
import { useRef, useCallback } from "react";
import { usePDF } from "react-to-pdf";
import { Data } from "./Data";
const Droppable = ({selectDiv,setSelect}) =>{
  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
  const [position, setPosition] = useState({ x: 0, y: 0 });
    const [elements, setElements] = useState([]);
    

    
    const eventHandler = (e, data) => {
        console.log('Event Type', e.type);
        console.log({e, data});
        const rect = e.target.getBoundingClientRect();
        console.log(rect.top, rect.right, rect.bottom, rect.left);
      }
      const nodeRef = useRef(null);
    

      useEffect(()=>{
        if(selectDiv){

            
            setElements([...elements,selectDiv]);
            updateLocalStorage([...elements,selectDiv]);
        }
      },[selectDiv])
    console.log('content added' , elements);

    useEffect(()=>{
      const storedElements = localStorage.getItem("canvasElements");
      if(storedElements){
        setElements(JSON.parse(storedElements));
      }
    },[]);

    const updateLocalStorage = (data) =>{
      localStorage.setItem("canvasElements" , JSON.stringify(data));
      
    }

    const handledelete = (index) =>{
      const newData = elements.filter((i) => i.id !== index);
      console.log("new data",newData)
      setElements(newData);
      updateLocalStorage(newData);

    }
    

    return(
      <>

<span ref={nodeRef}>
              
              <div className='canvas' ref={targetRef} >
              {
               Data.map((item) =>{
                    return (
                        <Draggable nodeRef={nodeRef}
                        key={item.id}
              axis="both"
              handle=".handle"
              // defaultPosition={position}
              defaultPosition={{x:item.positionx ,  y:item.positiony}}
              scale={1}
              onStart={eventHandler}
              onDrag={eventHandler}  
              onStop={eventHandler}
              allowAnyClick={true}
              bounds={{ top: -1, left: -1, right: 605 , bottom: 447 }}

              >
           

                 {(
                  <div className="handle" style={{border: "2px solid red", padding: "1rem", width:"20%", position:"absolute"}}>
                    {item.name}
                    <button onClick={()=>handledelete(item.id)}>&#128465;</button>
                  </div>
                )} 
            
              </Draggable>
                    )
                })
              }
              
              <button style={{position:"absolute", margin:"0px", top:"0px", right:"0px"}} type="button" onClick={() => toPDF()}>&#8595;</button>
              

          </div>  
          
                </span>
          <div></div>
                
      </>

    )
}

export default Droppable;
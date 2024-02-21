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
        <div className="outercanvas"  >
              <span ref={nodeRef}>
              
              <div className='canvas' >
              {
                elements.map((item) =>{
                    return (
                        <Draggable nodeRef={nodeRef}
                        key={item.id}
              axis="both"
              handle=".handle"
              defaultPosition={{x:0,y:0}}
              // position="absolute"
            //   grid={[25, 25]}
              scale={1}
              onStart={eventHandler}
              onDrag={eventHandler}  
              onStop={eventHandler}
              allowAnyClick={true}
              bounds={{ top: -0, left: -0, right: 605 , bottom: 445 }}

              >
           

                 {(
                  <div className="handle" style={{border: "2px solid red", padding: "1rem", width:"20%"}}>
                    {item.name}
                    <button onClick={()=>handledelete(item.id)}>&#128465;</button>
                  </div>
                )} 
            
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
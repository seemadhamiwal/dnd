import Draggable from "react-draggable";
import { Data } from "./Data";
import React from "react";
import { useState } from "react";


const DraggableInputs = ({selectDiv,setSelect}) =>{
  const [elements, setElements] = useState([]);

  
    
    const updateDataFunction=(elementName)=>{
      
      setElements([...elements, elementName]);
        //data
        setSelect(elementName);
    
        
        
      }
      
      return (
        
        <div className="App">
          <div className='container'>
            <div className='content'>
              {Data.map((item)=>{
                return(
                  
                    <div className='d-flex Area'  key={item?.id} style={{width:[item.width],height:[item.height]}}>
                  <span>{item?.name}</span>
                  <button style={{borderRadius:"40px"}} onClick={()=>{updateDataFunction(item)}}>+</button>
                </div>
                  
                )
              })}
             
            </div>

          </div>
        </div>
      );
}

export default DraggableInputs;
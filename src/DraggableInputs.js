import Draggable from "react-draggable";
import { Data } from "./Data";
import React from "react";
import { useState } from "react";
import {v4 as uuid} from "uuid";



const DraggableInputs = ({selectDiv,setSelect}) =>{
  const [elements, setElements] = useState([]);
  // const newComponent = {position: { x: 0, y: 0}};

  
    
    const updateDataFunction=(elementName)=>{
      
      console.log('element name new',elementName)
      const uid = uuid();
      const min = 1;
      const max = 100;
      const ranId = Math.random() * (max - min);
      console.log("New uid" , ranId);
      const newUid = uid.concat(ranId);
      const newItem = { ...elementName, id: newUid };

      setElements([...elements, newItem]);
      setSelect(newItem);

      console.log("uid of added element",elementName.id);
      // setElements([...elements, elementName]);
      //   //data
      //   setSelect(elementName);
    
        
        
      }
      
      return (
        
        <div className="App">
          <div className='container'>
            <div className='content'>
              {Data.map((item)=>{
                return(
                    <div className='d-flex Area' key={item?.id} style={{width:[item.width],height:[item.height]}}>
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
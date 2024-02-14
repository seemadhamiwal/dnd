import logo from './logo.svg';
import './App.css';
import Draggable from './Draggable';
import Droppable from './Droppable';
import { DndContext} from '@dnd-kit/core';
import
function App() {
  return (
    <div className="App">
    <DndContext>
      <Draggable/>
      <Droppable/>
    </DndContext>
    </div>
  );
}


export default App;

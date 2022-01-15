import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';
import Dragdrop from './components/DragDrop';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Dragdrop />
      </div>
    </DndProvider>
  );
}

export default App;

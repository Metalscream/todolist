import { Button } from './Components/Button/Button'; 
import { ToDoList } from './Components/ToDoList/ToDoList'
import { useToDoData } from './useToDoData';

function App() {

  const {toDoList, addItem} = useToDoData()

  return (
    <div>
      <ToDoList list={toDoList}/>
      <Button onClick={addItem}>Добавить</Button>
    </div>
  );
}

export default App;

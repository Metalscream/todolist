import { Button } from './Components/Button/Button';
import { ToDoList } from './Components/ToDoList/ToDoList';
import { useToDoData } from './useToDoData';

function App() {
  const { toDoList, addItem } = useToDoData();

  return (
    <div>
      <Button onClick={addItem}>Добавить</Button>
      <ToDoList list={toDoList} />
    </div>
  );
}

export default App;

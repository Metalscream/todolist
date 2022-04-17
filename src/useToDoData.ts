import { useState } from 'react';
import { IToDoItem, ToDoStatus } from './Components/ToDoItem/types';

export function useToDoData() {
  const [toDoList, setToDoList] = useState<IToDoItem[]>([]);

  const addItem = () => {
    const old = [...toDoList];
    const date = new Date().getTime();
    const item: IToDoItem = {
      id: date,
      status: ToDoStatus.TODO,
      text: '',
      timeStamp: String(date),
      title: '',
    };
    old.push(item);
    setToDoList(old);
  };
  const updateItem = () => {};
  const removeItem = () => {};

  return {
    toDoList,
    addItem,
    updateItem,
    removeItem,
  };
}

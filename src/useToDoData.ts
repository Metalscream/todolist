import { useState, useEffect } from 'react';
import { IToDoItem, ToDoStatus } from './Components/ToDoItem/types';

export function useToDoData() {
  const [toDoList, setToDoList] = useState<IToDoItem[]>([]);
  const [isLastElementFilled, setLastElementFilled] = useState<boolean>(true);

  const addItem = () => {
    if (!isLastElementFilled) {
      return;
    }
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
  const isTheLastToDoItemFilled = () => {
    if (toDoList.length) {
      const lastItem = toDoList[toDoList.length - 1];
      setLastElementFilled(!!lastItem.text && !!lastItem.title);
    }
  };

  useEffect(() => {
    isTheLastToDoItemFilled();
  }, [toDoList]);

  return {
    toDoList,
    addItem,
    updateItem,
    removeItem,
  };
}

import React from 'react';
import { IToDoListProps } from './types';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import styles from './ToDoList.module.scss';

export function ToDoList({ list }: IToDoListProps) {
  console.log(list);
  return (
    <div className={styles.root}>
      {list.map((value) => (
        <ToDoItem
          key={value.id}
          id={value.id}
          title={value.title}
          text={value.text}
          timeStamp={value.timeStamp}
          status={value.status}
        />
      ))}
    </div>
  );
}

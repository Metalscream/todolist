import React from 'react';
import { IToDoItemProps } from './types';
import styles from './ToDoItem.module.scss';

export function ToDoItem({
  status,
  text,
  timeStamp,
  title,
}: IToDoItemProps) {
  return (
    <div className={styles.root}>
      <h1>
        {title}
      </h1>
      <p>
        {text}
      </p>
      <div>
        {timeStamp}
      </div>
      <div>
        {status}
      </div>
    </div>
  );
}

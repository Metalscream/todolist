import { ReactChild } from 'react';
import styles from './Button.module.scss';

interface IButtonProps {
  children: ReactChild;
  onClick: () => void;
}

export function Button({ children, onClick }: IButtonProps) {
  return (
    <div className={styles.root} onClick={onClick}>{children}</div>
  );
}

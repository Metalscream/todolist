import { ReactChild } from 'react'

interface IButtonProps {
  children: ReactChild;
  onClick: () => void;
}

export function Button({children, onClick}: IButtonProps) {
  return (
    <div onClick={onClick}>{children}</div>
  )
}

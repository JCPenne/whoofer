import styles from './Button.module.css';

import { pacifico } from '@/pages/_app';

export default function Button({
  children,
  disabled,
  onClick,
  type,
}) {
  return (
    <button
      type='button'
      className={`${styles[type]} + ${pacifico.className}`}
      disabled={disabled}
      onClick={onClick && (() => onClick(true))}
    >
      {children}
    </button>
  );
}

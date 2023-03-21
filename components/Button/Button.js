import styles from './Button.module.css';

import { Pacifico } from 'next/font/google';
const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
});

export default function Button({ children, disabled, onClick }) {
  return (
      <button
        type='button'
        className={styles.filled}
        disabled={disabled}
        onClick={onClick && (() => onClick(true))}
      >
        {children}
      </button>
  );
}

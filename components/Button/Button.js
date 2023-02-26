import styles from './Button.module.css';

export default function Button({ children }) {
  return (
    <button
      type='button'
      className={styles.filled}
    >
      {children}
    </button>
  );
}

import styles from './Button.module.css';

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

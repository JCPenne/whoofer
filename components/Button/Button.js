import styles from './Button.module.css';

export default function Button({ children, disableButton, onClick }) {
  return (
    <button
      type='button'
      className={styles.filled}
      disabled={disableButton}
      onClick={() => onClick(true)}
    >
      {children}
    </button>
  );
}

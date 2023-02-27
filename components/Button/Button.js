import styles from './Button.module.css';

export default function Button({ children, disableButton }) {
  return (
    <button
      type='button'
      className={styles.filled}
      disabled={disableButton}
      onClick={() => console.log('click')}
    >
      {children}
    </button>
  );
}

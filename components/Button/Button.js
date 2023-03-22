import styles from './Button.module.css';

export default function Button({
  children,
  disabled,
  onClick,
  type,
}) {
  return (
    <button
      type='button'
      className={styles[type]}
      disabled={disabled}
      onClick={onClick && (() => onClick(true))}
    >
      {children}
    </button>
  );
}

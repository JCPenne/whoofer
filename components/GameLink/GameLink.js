import styles from './GameLink.module.css';
import Link from 'next/link';

export function GameLink({
  destination,
  title,
  blurbPrimary,
  blurbSecondary,
}) {
  return (
    <Link
      href={`/${destination}`}
      className={styles.link}
    >
      <h3 className={styles.link_label}>{title}</h3>
      <p className={styles.game_blurb__primary}>{blurbPrimary}</p>
      <p className={styles.game_blurb__secondary}>{blurbSecondary}</p>
    </Link>
  );
}

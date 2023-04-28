import { josefinSans } from '@/pages/_app';
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
      className={styles.wrapper}
    >
      <p
        className={`${styles.primaryBlurb} ${josefinSans.className}`}
      >
        {blurbPrimary}
      </p>
      <p
        className={`${styles.secondaryBlurb} ${josefinSans.className}`}
      >
        {blurbSecondary}
      </p>
      <h3 className={styles.title}>{title}</h3>
    </Link>
  );
}

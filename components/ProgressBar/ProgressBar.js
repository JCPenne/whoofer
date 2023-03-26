import React from 'react';

import styles from './ProgressBar.module.css';

export function ProgressBar({ percentComplete }) {
  return (
    <div className={styles.container}>
      <div
        className={styles.filler}
        style={{ width: `${percentComplete}%` }}
      ></div>
    </div>
  );
}

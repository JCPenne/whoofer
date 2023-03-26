import React from 'react';

import styles from './ProgressBar.module.css';

function ProgressBar({ percentComplete }) {
  console.log('Progress Bar Re-renders');
  return (
    <div className={styles.container}>
      <div
        className={styles.filler}
        style={{ width: `${percentComplete}%` }}
      ></div>
    </div>
  );
}

export default React.memo(ProgressBar);

import React from 'react';

import styles from './timer.module.css';

export default function Timer({ numOfSecs }) {
  const [time, setTime] = React.useState(numOfSecs || 0);

  React.useEffect(() => {
    if (time === 0) {
      return;
    }
    setTimeout(() => {
      console.log('tick')
      setTime(currentValue => currentValue - 1);
    }, 1000);
  });

  return (
    <div className={styles.timer}>
      {time > 0 ? time : "Time's up!"}
    </div>
  );
}

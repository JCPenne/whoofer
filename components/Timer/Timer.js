import React from 'react';

import styles from './timer.module.css';

export default function Timer({ numOfSecs, timeExpired }) {
  const [time, setTime] = React.useState(numOfSecs || 0);

  React.useEffect(() => {
    if (time === 0) {
      timeExpired(true);
      return;
    }
    setTimeout(() => {
      // console.log('tick');
      setTime(currentValue => currentValue - 1);
    }, 1000);
  });

  return (
    <>
      {time > 0 ? (
        <div className={styles.timer}>{time}</div>
      ) : (
        <p style={{ color: 'white' }}>Times up!</p>
      )}
    </>
  );
}

import React from 'react';

import { timeAllowance } from '@/constants';

import styles from './Timer.module.css';

export default function Timer({ timerStatus, handleTimeExpired }) {
  const [time, setTime] = React.useState(timeAllowance);

  React.useEffect(() => {
    if (timerStatus === 'active') {
      const interval = setInterval(() => {
        if (time > 0) {
          setTime(prev => prev - 1);
        }
      }, 1000);

      time === 0 && handleTimeExpired();

      return () => {
        clearInterval(interval);
      };
    }
  });

  return (
    <div className={`${styles.timer} ${timerStatus === 'active' && styles.active}`}>
      <strong>{time}</strong>
    </div>
  );
}

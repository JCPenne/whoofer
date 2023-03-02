import React from 'react';

export default function Timer({ setTimeExpired }) {
  const [time, setTime] = React.useState(5);

  React.useEffect(() => {
    if (time === 0) {
      setTimeExpired(true);
      return;
    }
    const timeoutID = setTimeout(() => {
      setTime(currentValue => currentValue - 1);
    }, 1000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [setTimeExpired,time]);

  return <>{time > 0 ? <div>{time}</div> : <p>Times up!</p>}</>;
}

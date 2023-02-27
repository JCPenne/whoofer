import React from 'react';

import Timer from '@/components/Timer/Timer';
import Button from '@/components/Button/Button';

export default function Quiz() {
  const [disableButton, setDisableButton] = React.useState(false)
  return (
    <>
      <h1 style={{ color: 'white' }}>Quiz</h1>
      <Timer numOfSecs={5} timeExpired={setDisableButton}></Timer>
      <Button disableButton={disableButton}>Option A</Button>
    </>
  );
}

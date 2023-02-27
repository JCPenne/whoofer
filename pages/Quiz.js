import React from 'react';

import Timer from '@/components/Timer/Timer';
import Button from '@/components/Button/Button';
import GameLandingPage from '@/components/GameLandingPage/GameLandingPage';

export default function Quiz() {
  const [quizActive, setQuizActive] = React.useState(false);
  const [disableButton, setDisableButton] = React.useState(false)

  function handleClick() {
    console.log('click');
  }
  return (
    <>
    {!quizActive ? <GameLandingPage GameType='Quiz' onClick={setQuizActive}/> :
    <> 
      <h1 style={{ color: 'white' }}>Quiz</h1>
      <Timer numOfSecs={5} timeExpired={setDisableButton}></Timer>
      <Button disabled={disableButton} onClick={handleClick}>Option A</Button>
      </>}
    </>
  );
}

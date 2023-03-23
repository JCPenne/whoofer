import styles from './GameLandingPage.module.css';

import Button from '../Button/Button';

export default function GameLandingPage({
  GameType,
  setGameStatus,
  setTimerStatus,
}) {
  function handleGameStart() {
    setGameStatus('active');
    setTimeout(() => {
      setTimerStatus('active');
    }, 1000);
  }
  return (
    <>
      <h1 className={styles.game_type}>{GameType}</h1>
      <p className={styles.game_blurb}>
        You will be asked 10 breed-specific questions 
        <br />
        10 seconds per question.
        <br />
        Once you hit Start the countdown timer will begin! 
      </p>
      <p>The game and timer will begin when you click Start</p>
      <Button
        onClick={handleGameStart}
        type='start_game'
      >
      </Button>
    </>
  );
}

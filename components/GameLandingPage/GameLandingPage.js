import styles from './GameLandingPage.module.css';

import { Button } from '../Button/Button';

export default function GameLandingPage({
  GameType,
  handleGameStart,
}) {
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
      <Button
        onClick={handleGameStart}
        type='start_game'
      ></Button>
    </>
  );
}

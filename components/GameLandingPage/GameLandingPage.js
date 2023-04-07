import styles from './GameLandingPage.module.css';

import { Button } from '../Button/Button';

export default function GameLandingPage({
  GameType,
  handleGameStart,
}) {
  return (
    <div className={styles.landingPageMain}>
      <h1 className={styles.game_type}>{GameType}</h1>
      <p className={styles.game_blurb}>
        You will be asked 10 breed-specific questions
        <br />
        You have 15 seconds to answer each question.
        <br />
        Once you hit Start the countdown timer will begin!
      </p>
      <Button
        onClick={handleGameStart}
        type='start_game'
      ></Button>
    </div>
  );
}

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
        We have gathered 15 breed-specific questions for you!
        <br />
        You will have 90 seconds to answer as many questions as you can.
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

import styles from './GameLandingPage.module.css';

import { Button } from '../Button/Button';
import { josefinSans } from '@/pages/_app';

export default function GameLandingPage({
  GameType,
  handleGameStart,
}) {
  return (
    <div className={styles.landingPageMain}>
      <h1 className={styles.game_type}>{GameType}</h1>
      <section
        className={`${styles.blurb_wrapper} ${josefinSans.className}`}
      >
        <p>We have gathered 15 breed-specific questions for you!</p>
        <p>
          You will have 90 seconds to answer as many questions as you
          can.
        </p>
        <p>Once you hit Start the countdown timer will begin!</p>
      </section>

      <Button
        onClick={handleGameStart}
        type='start_game'
      ></Button>
    </div>
  );
}

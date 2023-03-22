import blurbs from '../../data/blurbs.json';
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
      <h1>{GameType}</h1>
      <p>{blurbs[GameType]}</p>
      <p>The game and timer will begin when you click Start</p>
      <Button onClick={handleGameStart} type='start-game'>Start</Button>
    </>
  );
}

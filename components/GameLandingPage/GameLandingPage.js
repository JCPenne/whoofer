import styles from './GameLandingPage.module.css';
import blurbs from '../../data/blurbs.json';
import Button from '../Button/Button';
export default function GameLandingPage({ GameType, onClick }) {
  return (
    <>
      <h1>{GameType}</h1>
      <p>{blurbs[GameType]}</p>
      <p>The game and timer will begin when you click Start</p>
      <Button onClick={onClick}>Start</Button>
    </>
  );
}

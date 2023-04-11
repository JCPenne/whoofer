import React from 'react';

import styles from './Header.module.css';

import Questions from '../../data/questions.json';

import { Modal } from '../Modal/Modal';
import { Button } from '../Button/Button';
import ProgressBar from '../ProgressBar/ProgressBar';
import Timer from '../Timer/Timer';

export function Header({
  modalOpen,
  setModalOpen,
  timerStatus,
  setTimerStatus,
  handleTimeExpired,
  questionCount,
  quizStatus,
}) {
  const [percentComplete, setPercentComplete] = React.useState(0);

  React.useEffect(() => {
    if (questionCount === 0) {
      setPercentComplete(0);
      return;
    }
    if (quizStatus === 'end') {
      setPercentComplete(100);
      return;
    } else {
      setPercentComplete((questionCount / Questions.length) * 100);
    }
  }, [questionCount, quizStatus]);

  function handleClick() {
    setModalOpen(!modalOpen);
    setTimerStatus('paused');
  }

  return (
    <>
      {modalOpen && (
        <Modal
          modalOpen={setModalOpen}
          setTimerStatus={setTimerStatus}
        />
      )}
      <header className={styles.header}>
        <Button
          type='homepage-link'
          onClick={handleClick}
        >
          Whoofer
        </Button>
        <ProgressBar percentComplete={percentComplete} />
        <Timer
          timerStatus={timerStatus}
          handleTimeExpired={handleTimeExpired}
        />
      </header>
    </>
  );
}

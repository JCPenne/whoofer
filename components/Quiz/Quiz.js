import Link from 'next/link';
import React from 'react';

import styles from './Quiz.module.css';

import { QuizQuestion } from '../QuizQuestions/QuizQuestion';
import ProgressBar from '../ProgressBar/ProgressBar';
import Timer from '../Timer/Timer';
import Button from '../Button/Button';
import { Modal } from '../Modal/Modal';

export function Quiz({
  currentQuestion,
  questionNum,
  validateAnswer,
  time,
  setTimerStatus,
}) {
  const [modalOpen, setModalOpen] = React.useState(false);

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
          onClick={() => handleClick()}
        >
          Whoofer
        </Button>
        <ProgressBar
          percentComplete={(questionNum + 1) * 10}
        ></ProgressBar>
        <Timer time={time} />
      </header>
      <QuizQuestion
        currentQuestion={currentQuestion}
        validateAnswer={validateAnswer}
      ></QuizQuestion>
    </>
  );
}

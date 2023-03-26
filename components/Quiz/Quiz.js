import Link from 'next/link';
import React from 'react';

import styles from './Quiz.module.css';

import { QuizQuestion } from '../QuizQuestions/QuizQuestion';
import ProgressBar from '../ProgressBar/ProgressBar';
import Timer from '../Timer/Timer';

export function Quiz({
  currentQuestion,
  questionNum,
  validateAnswer,
  time,
}) {
  return (
    <>
      <header className={styles.header}>
        <Link href='/'>Whoofer</Link>
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

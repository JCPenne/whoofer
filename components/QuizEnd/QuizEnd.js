import React from 'react';
import Link from 'next/link';

import styles from './QuizEnd.module.css';

import quizEndResponses from '@/data/quizEndResponses.json';
import { Button } from '@/components/Button/Button';

export function QuizEnd({ quizLength, correctAnswers }) {
  console.log(quizEndResponses);

  function determineResponse(quizLength, correctAnswers) {
    if (correctAnswers <= quizLength / 3) {
      return quizEndResponses[0];
    }
    if (
      correctAnswers > quizLength / 3 &&
      correctAnswers < quizLength
    ) {
      return quizEndResponses[1];
    }
    if (correctAnswers === quizLength) {
      return quizEndResponses[2];
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.banner}>
        That&apos;s the end of the Quiz!
      </h1>
      <h2 className={styles.status}>{correctAnswers} / {quizLength}</h2>
      <p className={styles.response}>
        {determineResponse(quizLength, correctAnswers)}
      </p>

      <div className={styles.buttonWrapper}>
        <Link href='/'>
          <Button type='quizEnd'>Home</Button>
        </Link>
      </div>
    </div>
  );
}

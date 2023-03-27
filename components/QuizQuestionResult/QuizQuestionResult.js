import React from 'react';

import styles from './QuizQuestionResult.module.css';

export function QuizQuestionResult({
  answerStatus,
  timeExpired,
  correctAnswer,
}) {
  return (
    <>
      {timeExpired && <h1>Times up!</h1>}
      {answerStatus === 'correct' && (
        <section
          className={`${styles.answerBlock} + ${styles.correct}`}
        >
          Correct!
        </section>
      )}
      {answerStatus === 'incorrect' && (
        <section
          className={`${styles.answerBlock} + ${styles.incorrect}`}
        >
          <h2 className={styles.mainText}>
            Whoof! That ain&apos;t right!
          </h2>
          <div className={styles.answerText}>
            <p className={styles.subText}>
              The correct answer was:
              {'     '}
            </p>
            <h2 className={styles.correctAnswer}>{correctAnswer}</h2>
          </div>
        </section>
      )}
    </>
  );
}

import React from 'react';

import styles from './QuizQuestionResult.module.css';

export function QuizQuestionResult({
  answerStatus,
  immediatelyProgressQuiz,
  correctAnswer,
}) {
  return (
    <>
      {answerStatus === 'expired' && (
        <section
          className={`${styles.answerBlock} + ${styles.incorrect}`}
          onClick={() => immediatelyProgressQuiz()}
        >
          <h2 className={styles.mainText}>Times Up!</h2>
        </section>
      )}
      {answerStatus === 'correct' && (
        <section
          className={`${styles.answerBlock} + ${styles.correct}`}
          onClick={() => immediatelyProgressQuiz()}
        >
          Correct!
        </section>
      )}
      {answerStatus === 'incorrect' && (
        <section
          className={`${styles.answerBlock} + ${styles.incorrect}`}
          onClick={() => immediatelyProgressQuiz()}
        >
          <h2 className={styles.mainText}>
            Whoof! That ain&apos;t right!
          </h2>
          <div className={styles.answerText}>
            <p className={styles.subText}>The correct answer was:</p>
            <h2 className={styles.correctAnswer}>{correctAnswer}</h2>
          </div>
        </section>
      )}
    </>
  );
}

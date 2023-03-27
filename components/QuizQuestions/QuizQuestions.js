import React from 'react';

import styles from './QuizQuestion.module.css';

import { Public_Sans } from 'next/font/google';
const publicSans = Public_Sans({ subsets: ['latin'] });

import { Button } from '../Button/Button';

export function QuizQuestions({ currentQuestion, validateAnswer }) {
  return (
    <div
      className={`${styles.mainWrapper} + ${publicSans.className}`}
    >
      <p className={styles.question}>{currentQuestion.question}</p>
      <section className={styles.answerWrapper}>
        {currentQuestion.options.map((answerValue, index) => {
          return (
            <Button
              type='answer'
              key={index}
              onClick={() => validateAnswer(answerValue)}
            >
              {answerValue}
            </Button>
          );
        })}
      </section>
    </div>
  );
}

import React from 'react';
import { randomizeAnswers } from '@/utils/Randomizers';

import styles from './QuizQuestions.module.css';

import { Public_Sans } from 'next/font/google';
const publicSans = Public_Sans({ subsets: ['latin'] });

import { Button } from '../Button/Button';
import { josefinSans } from '@/pages/_app';

export function QuizQuestions({ currentQuestion, validateAnswer }) {
  return (
    <div
      className={`${styles.mainWrapper} + ${publicSans.className}`}
    >
      <p className={`${styles.question} ${josefinSans.className}`}>
        {currentQuestion.question}
      </p>
      <section className={styles.answerWrapper}>
        {randomizeAnswers(currentQuestion.options).map(
          (answerValue, index) => {
            return (
              <Button
                type='answer'
                key={index}
                onClick={() => validateAnswer(answerValue)}
              >
                {answerValue}
              </Button>
            );
          }
        )}
      </section>
    </div>
  );
}

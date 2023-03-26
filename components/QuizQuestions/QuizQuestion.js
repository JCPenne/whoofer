import Button from '../Button/Button';

import { Public_Sans } from 'next/font/google';

const publicSans = Public_Sans({ subsets: ['latin'] });

import styles from './QuizQuestion.module.css';

export function QuizQuestion({ currentQuestion, validateAnswer }) {
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

import React from 'react';

import { QuizQuestion } from './QuizQuestions/QuizQuestion';

export function Quiz({
  currentQuestion,
  questionNum,
  setAnswerStatus,
  quizLength,
  CorrectAnswers,
}) {
  return (
    <>
      <h1>Quiz</h1>
      <h2>{`Question ${questionNum + 1}`}</h2>
      <QuizQuestion
        currentQuestion={currentQuestion}
        setAnswerStatus={setAnswerStatus}
      ></QuizQuestion>
      <p>{`${CorrectAnswers} of ${quizLength} correct`}</p>
    </>
  );
}

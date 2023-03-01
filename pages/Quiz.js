import React from 'react';

import GameLandingPage from '@/components/GameLandingPage/GameLandingPage';
import { QuizQuestions } from '@/components/QuizQuestions/QuizQuestions';

import Questions from '../data/questions.json';

export default function Quiz() {
  const [quizActive, setQuizActive] = React.useState(false);
  const [disableButton, setDisableButton] = React.useState(false);
  const [questionNumber, setQuestionNumber] = React.useState(1);
  const [answerStatus, setAnswerStatus] = React.useState({
    correct: false,
    incorrect: false,
    timeExpired: false,
  });
  const [numOfCorrectAnswers, SetNumOfCorrectAnswers] =
    React.useState(0);

  const currentQuestion = Questions[questionNumber];

  function handleClick(buttonValue) {
    const index = currentQuestion.answer;

    if (buttonValue === currentQuestion.options[index]) {
      setAnswerStatus({ ...answerStatus, correct: true });
      setTimeout(() => {
        setAnswerStatus({ ...answerStatus, correct: false });
      }, 3000);

      SetNumOfCorrectAnswers(numOfCorrectAnswers + 1);
      setQuestionNumber(questionNumber + 1);
    } else {
      setAnswerStatus({ ...answerStatus, incorrect: true });
      setTimeout(() => {
        setAnswerStatus({ ...answerStatus, incorrect: false });
      }, 3000);
      setQuestionNumber(questionNumber + 1);
    }
  }
  return (
    <>
      {!quizActive ? (
        <GameLandingPage
          GameType='Quiz'
          onClick={setQuizActive}
        />
      ) : (
        <>
          {answerStatus.correct ? (
            <h1>Correct</h1>
          ) : (
            <QuizQuestions
              currentQuestion={currentQuestion}
              handleClick={handleClick}
              disabled={disableButton}
            ></QuizQuestions>
          )}
        </>
      )}
    </>
  );
}

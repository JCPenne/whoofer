import React from 'react';

import GameLandingPage from '@/components/GameLandingPage/GameLandingPage';
import { QuizQuestions } from '@/components/QuizQuestions/QuizQuestions';
import { AnswerResult } from '@/components/AnswerResult/AnswerResult';

import Questions from '../data/questions.json';

export default function Quiz() {
  const [quizActive, setQuizActive] = React.useState(false);
  const [disableButton, setDisableButton] = React.useState(false);
  const [questionNumber, setQuestionNumber] = React.useState(0);
  const [answerStatus, setAnswerStatus] = React.useState({
    correct: false,
    incorrect: false,
    timeExpired: false,
  });
  const [numOfCorrectAnswers, SetNumOfCorrectAnswers] =
    React.useState(0);
  const [quizEnd, setQuizEnd] = React.useState(false);

  const currentQuestion = Questions[questionNumber];

  function handleClick(buttonValue) {
    let answerStatus;
    const correctAnswerIndex = currentQuestion.answer;

    buttonValue === currentQuestion.options[correctAnswerIndex]
      ? (answerStatus = 'correct')
      : (answerStatus = 'incorrect');

    answerStatus === 'correct' &&
      SetNumOfCorrectAnswers(numOfCorrectAnswers + 1);

    setAnswerStatus({ ...answerStatus, [answerStatus]: true });
    setTimeout(() => {
      setAnswerStatus({ ...answerStatus, [answerStatus]: false });
    }, 3000);

    setQuestionNumber(questionNumber + 1);
    questionNumber === Questions.length - 1 && setQuizEnd(true);
  }

  return (
    <>
      {quizEnd ? (
        <h1>End</h1>
      ) : (
        <>
          {!quizActive ? (
            <GameLandingPage
              GameType='Quiz'
              onClick={setQuizActive}
            />
          ) : (
            <>
              {!answerStatus.correct && !answerStatus.incorrect ? (
                <QuizQuestions
                  currentQuestion={currentQuestion}
                  onClick={handleClick}
                  disableButtons={disableButton}
                ></QuizQuestions>
              ) : (
                <AnswerResult answerStatus={answerStatus} />
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

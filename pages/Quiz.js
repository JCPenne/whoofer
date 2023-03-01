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

  console.log('quizEnd', quizEnd);
  console.log(Questions.length);

  const currentQuestion = Questions[questionNumber];

  function handleClick(buttonValue) {
    let result;
    const indexOfAnswer = currentQuestion.answer;

    buttonValue === currentQuestion.options[indexOfAnswer]
      ? (result = 'correct')
      : (result = 'incorrect');

    result === 'correct' &&
      SetNumOfCorrectAnswers(numOfCorrectAnswers + 1);

    setAnswerStatus({ ...answerStatus, [result]: true });
    setTimeout(() => {
      setAnswerStatus({ ...answerStatus, [result]: false });
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
                  handleClick={handleClick}
                  disabled={disableButton}
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

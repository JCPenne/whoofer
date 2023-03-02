import React from 'react';

import GameLandingPage from '@/components/GameLandingPage/GameLandingPage';
import { QuizQuestions } from '@/components/QuizQuestions/QuizQuestions';
import { AnswerResult } from '@/components/AnswerResult/AnswerResult';
import { QuizEnd } from '@/components/QuizEnd/QuizEnd';

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
      setQuestionNumber(questionNumber + 1);
      questionNumber === Questions.length - 1 && setQuizEnd(true);
    }, 1000);
  }

  return (
    <>
      {quizEnd ? (
        <QuizEnd quizLength={Questions.length} correctAnswers={numOfCorrectAnswers}/>
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
                <>
                  <h1>Quiz</h1>
                  <h2>{`Question ${questionNumber + 1}`}</h2>
                  <QuizQuestions
                    currentQuestion={currentQuestion}
                    onClick={handleClick}
                    disableButtons={disableButton}
                  ></QuizQuestions>
                  <p>{`${numOfCorrectAnswers} of ${Questions.length} correct`}</p>
                </>
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

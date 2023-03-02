import React from 'react';

//Import Components
import GameLandingPage from '@/components/GameLandingPage/GameLandingPage';
import { QuizQuestions } from '@/components/QuizQuestions/QuizQuestions';
import { QuizEnd } from '@/components/QuizEnd/QuizEnd';

//Import Data
import Questions from '../data/questions.json';
//Import Constants
import { timeAllowance } from '@/constants';
import { QuizQuestionResult } from '@/components/QuizQuestionResult/QuizQuestionResult';

export default function Quiz() {
  //Declare State Variables
  const [time, setTime] = React.useState(timeAllowance);
  const [timerActive, setTimerActive] = React.useState(false);
  const [timerExpired, setTimerExpired] = React.useState(false);
  const [quizActive, setQuizActive] = React.useState(false);
  const [quizEnd, setQuizEnd] = React.useState(false);

  const [questionNumber, setQuestionNumber] = React.useState(0);
  const [answerStatus, setAnswerStatus] = React.useState({
    correct: false,
    incorrect: false,
  });
  const [numOfCorrectAnswers, setNumOfCorrectAnswers] =
    React.useState(0);

  //Declare Global Variables
  const timer = React.useRef(null); //{current: null}
  const currentQuestion = Questions[questionNumber];

  //Declare Functions
  function handleQuizStart() {
    setQuizActive(true);
    setTimeout(() => {
      setTimerActive(true);
    }, 1000);
  }

  function handleAnswerSelection(buttonValue) {
    let answerStatus;
    const { answer, options } = currentQuestion;

    buttonValue === options[answer]
      ? (answerStatus = 'correct')
      : (answerStatus = 'incorrect');

    progressQuiz(answerStatus);
  }

  function progressQuiz(status) {
    status === 'correct' &&
      setNumOfCorrectAnswers(numOfCorrectAnswers + 1);

    setAnswerStatus({ ...answerStatus, [status]: true });

    setTimeout(() => {
      setAnswerStatus({ correct: false, incorrect: false });
      questionNumber === Questions.length - 1
        ? setQuizEnd(true)
        : setQuestionNumber(questionNumber + 1);
    }, 1000);

    resetTimer();
  }

  function resetTimer() {
    time === 0 && setTimerExpired(true);
    setTimerActive(false);
    setTime(timeAllowance);

    setTimeout(() => {
      setTimerExpired(false);
    }, 1500);
    setTimeout(() => {
      setTimerActive(true);
    }, 2000);
  }

  React.useEffect(() => {
    if (time === 0) {
      progressQuiz();
    }
    if (time > 0 && timerActive && !quizEnd) {
      timer.current = setTimeout(() => {
        setTime(time - 1);
        console.log('tick');
      }, 1000);
    }

    return () => {
      clearTimeout(timer.current);
    };
  });

  return (
    <>
      {quizEnd ? (
        <QuizEnd
          quizLength={Questions.length}
          correctAnswers={numOfCorrectAnswers}
        />
      ) : (
        <>
          {!quizActive ? (
            <GameLandingPage
              GameType='Quiz'
              onClick={handleQuizStart}
            />
          ) : (
            <>
              {!answerStatus.correct &&
              !answerStatus.incorrect &&
              !timerExpired ? (
                <>
                  <h1>Quiz</h1>
                  <h2>{`Question ${questionNumber + 1}`}</h2>
                  <QuizQuestions
                    currentQuestion={currentQuestion}
                    onClick={handleAnswerSelection}
                  ></QuizQuestions>
                  <p>{time}</p>
                  <p>{`${numOfCorrectAnswers} of ${Questions.length} correct`}</p>
                </>
              ) : (
                <QuizQuestionResult
                  answerStatus={answerStatus}
                  timerExpired={timerExpired}
                />
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

import React from 'react';

//Import Components
import GameLandingPage from '@/components/GameLandingPage/GameLandingPage';
import { QuizQuestions } from '@/components/QuizQuestions/QuizQuestions';
import { QuestionStatus } from '@/components/QuestionStatus/QuestionStatus';
import { QuizEnd } from '@/components/QuizEnd/QuizEnd';

//Import Data
import Questions from '../data/questions.json';

export default function Quiz() {
  //Declare State Variables
  const [time, setTime] = React.useState(5);
  const [timeExpired, setTimeExpired] = React.useState(false);
  const [quizActive, setQuizActive] = React.useState(false);
  const [disableButton, setDisableButton] = React.useState(false);
  const [questionNumber, setQuestionNumber] = React.useState(0);
  const [answerStatus, setAnswerStatus] = React.useState({
    correct: false,
    incorrect: false,
  });
  const [numOfCorrectAnswers, setNumOfCorrectAnswers] =
    React.useState(0);
  const [quizEnd, setQuizEnd] = React.useState(false);

  //Declare Global Variables
  const timer = React.useRef(null); //{current: null}
  const currentQuestion = Questions[questionNumber];

  //Declare Functions
  function handleAnswerSelection(buttonValue) {
    let answerStatus;
    const { answer, options } = currentQuestion;

    buttonValue === options[answer]
      ? (answerStatus = 'correct')
      : (answerStatus = 'incorrect');

    answerStatus === 'correct' &&
      setNumOfCorrectAnswers(numOfCorrectAnswers + 1),
      setAnswerStatus({ ...answerStatus, [answerStatus]: true });

    setTimeout(() => {
      setAnswerStatus({ ...answerStatus, [answerStatus]: false });
      setQuestionNumber(questionNumber + 1);
      questionNumber === Questions.length - 1 && setQuizEnd(true);
    }, 1000);
  }

  function resetTimer() {
    setTimeExpired(true);
    setDisableButton(true);

    setTimeout(() => {
      setTime(5);
      setTimeExpired(false);
      setDisableButton(false);
    }, 2000);
    return;
  }

  function startTimer() {
    timer.current = setTimeout(() => {
      setTime(currentValue => currentValue - 1);
    }, 1000);
  }

  React.useEffect(() => {
    time === 0 && resetTimer();
    quizActive && startTimer();
    return () => {
      clearTimeout(timer.current);
    };
  }, [time, quizActive]);

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
              onClick={setQuizActive}
            />
          ) : (
            <>
              {!answerStatus.correct &&
              !answerStatus.incorrect &&
              !timeExpired ? (
                <>
                  <h1>Quiz</h1>
                  <h2>{`Question ${questionNumber + 1}`}</h2>
                  <QuizQuestions
                    currentQuestion={currentQuestion}
                    onClick={handleAnswerSelection}
                    disableButtons={disableButton}
                  ></QuizQuestions>
                  <p>{time}</p>
                  <p>{`${numOfCorrectAnswers} of ${Questions.length} correct`}</p>
                </>
              ) : (
                <QuestionStatus
                  answerStatus={answerStatus}
                  timeExpired={timeExpired}
                />
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

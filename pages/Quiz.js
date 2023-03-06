import React from 'react';

//Import Data
import Questions from '../data/questions.json';

//Import Constants
import { timeAllowance } from '@/constants';

//Import Components
import GameLandingPage from '@/components/GameLandingPage/GameLandingPage';
import { QuizEnd } from '@/components/QuizEnd/QuizEnd';
import { QuizQuestionResult } from '@/components/QuizQuestionResult/QuizQuestionResult';
import { Quiz } from '@/components/Quiz';

export default function QuizPage() {
  //Declare State Variables
  const [time, setTime] = React.useState(timeAllowance);
  console.log('time', time);
  // idle | active | expired
  const [timerStatus, setTimerStatus] = React.useState('idle');
  console.log('timerStatus', timerStatus);
  // idle | active | end
  const [quizStatus, setQuizStatus] = React.useState('idle');

  const [questionNumber, setQuestionNumber] = React.useState(0);
  const [CorrectAnswers, setCorrectAnswers] = React.useState(0);

  // undefined | correct | incorrect
  const [answerStatus, setAnswerStatus] = React.useState(undefined);

  //Declare Global Variables
  const currentQuestion = Questions[questionNumber];

  //Declare Functions

  function progressQuiz(status) {
    time === 0 && setTimerStatus('expired');
    // status === 'correct' && setCorrectAnswers(CorrectAnswers + 1);

    // setAnswerStatus(status);

    // setTimeout(() => {
    //   setAnswerStatus(undefined);
    //   questionNumber === Questions.length - 1
    //     ? setQuizStatus('end')
    //     : setQuestionNumber(questionNumber + 1);
    // }, 2000);

    // resetTimer();
  }

  function resetTimer() {
    setTimerStatus('idle');
    setTime(timeAllowance);

    setTimeout(() => {
      setTimerStatus('idle');
    }, 1500);
    setTimeout(() => {
      setTimerStatus('active');
    }, 2000);
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      time > 0 &&
      timerStatus === 'active' &&
        setTime(prev => prev - 1);
    }, 1000);

    if (time === 0) {
      progressQuiz();
    }

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      {quizStatus === 'idle' && (
        <GameLandingPage
          GameType='Quiz'
          setGameStatus={setQuizStatus}
          setTimerStatus={setTimerStatus}
        />
      )}
      {quizStatus === 'active' && (
        <>
          <Quiz
            questionNum={questionNumber}
            currentQuestion={currentQuestion}
            setAnswerStatus={setAnswerStatus}
            CorrectAnswers={CorrectAnswers}
            quizLength={Questions.length}
          ></Quiz>
          <p>{time}</p>
        </>
      )}
      {answerStatus && (
        <QuizQuestionResult answerStatus={answerStatus} />
      )}
      {timerStatus === 'expired' && (
        <QuizQuestionResult timeExpired={true} />
      )}
      {quizStatus === 'end' && (
        <QuizEnd
          quizLength={Questions.length}
          correctAnswers={CorrectAnswers}
        />
      )}
    </>
  );
}

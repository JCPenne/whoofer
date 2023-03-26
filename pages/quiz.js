import React from 'react';

import Questions from '../data/questions.json';

import { timeAllowance } from '@/constants';

import GameLandingPage from '@/components/GameLandingPage/GameLandingPage';
import { QuizEnd } from '@/components/QuizEnd/QuizEnd';
import { QuizQuestionResult } from '@/components/QuizQuestionResult/QuizQuestionResult';
import { Quiz } from '@/components/Quiz/Quiz';

export default function QuizPage() {
  const [time, setTime] = React.useState(timeAllowance);
  const [timerStatus, setTimerStatus] = React.useState('idle'); // idle | active | expired
  const [quizStatus, setQuizStatus] = React.useState('idle'); // idle | active | end
  const [answerStatus, setAnswerStatus] = React.useState(undefined); // undefined | correct | incorrect
  const [questionNumber, setQuestionNumber] = React.useState(0);
  const [correctAnswers, setCorrectAnswers] = React.useState(0);

  const currentQuestion = Questions[questionNumber];

  function handleQuizStart() {
    setQuizStatus('active');
    setTimeout(() => {
      setTimerStatus('active');
    }, 1000);
  }

  function progressQuiz() {
    if (questionNumber === Questions.length - 1) {
      setQuizStatus('end');
      setTimerStatus('idle');
    } else {
      setQuestionNumber(questionNumber + 1);
      setTimerStatus('active');
    }
  }

  function handleTimeExpired() {
    setTimerStatus('expired');
    setTime(timeAllowance);
    setTimeout(() => {
      progressQuiz();
    }, 1000);
  }

  function validateAnswer(answerValue) {
    setTimerStatus('idle');
    setTime(timeAllowance);

    const { options, answer } = currentQuestion;
    if (answerValue === options[answer]) {
      setAnswerStatus('correct');
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setAnswerStatus('incorrect');
    }
    setTimeout(() => {
      progressQuiz();
      setAnswerStatus(undefined);
    }, 1000);
  }

  function renderQuizComponent() {
    if (
      quizStatus === 'active' &&
      !answerStatus &&
      timerStatus === 'active'
    )
      return (
        <>
          <Quiz
            questionNum={questionNumber}
            currentQuestion={currentQuestion}
            validateAnswer={validateAnswer}
            time={time}
          ></Quiz>
        </>
      );
  }

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (time > 0 && timerStatus === 'active') {
  //       setTime(prev => prev - 1);
  //     }
  //   }, 1000);

  //   time === 0 && handleTimeExpired();

  //   return () => {
  //     clearInterval(interval);
  //   };
  // });

  return (
    <>
      {quizStatus === 'idle' && (
        <GameLandingPage
          GameType='Quiz'
          handleGameStart={handleQuizStart}
        />
      )}
      {renderQuizComponent()}
      {answerStatus && (
        <QuizQuestionResult answerStatus={answerStatus} />
      )}
      {timerStatus === 'expired' && (
        <QuizQuestionResult timeExpired={true} />
      )}
      {quizStatus === 'end' && (
        <QuizEnd
          quizLength={Questions.length}
          correctAnswers={correctAnswers}
        />
      )}
    </>
  );
}

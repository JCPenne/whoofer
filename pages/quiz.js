import React from 'react';

import Questions from '../data/questions.json';

import { timeAllowance } from '@/constants';

import GameLandingPage from '@/components/GameLandingPage/GameLandingPage';
import { Header } from '@/components/Header/Header';
import { QuizQuestions } from '@/components/QuizQuestions/QuizQuestions';
import { QuizEnd } from '@/components/QuizEnd/QuizEnd';
import { QuizQuestionResult } from '@/components/QuizQuestionResult/QuizQuestionResult';

export default function QuizPage() {
  const [time, setTime] = React.useState(timeAllowance);
  const [timerStatus, setTimerStatus] = React.useState('idle'); // idle | active | expired | paused
  const [quizStatus, setQuizStatus] = React.useState('idle'); // idle | active | end
  const [answerStatus, setAnswerStatus] = React.useState(undefined); // undefined | correct | incorrect
  const [questionNumber, setQuestionNumber] = React.useState(0);
  const [correctAnswers, setCorrectAnswers] = React.useState(0);
  const [modalOpen, setModalOpen] = React.useState(false);
  console.log(quizStatus);
  const currentQuestion = Questions[questionNumber];

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

  function renderGameLandingPage() {
    if (quizStatus === 'idle') {
      return (
        <GameLandingPage
          GameType='Quiz'
          handleGameStart={handleQuizStart}
        />
      );
    }
  }

  function renderHeader() {
    if (quizStatus === 'active') {
      return (
        <Header
          time={time}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          setTimerStatus={setTimerStatus}
          percentComplete={(questionNumber + 1) * 10}
        />
      );
    }
  }

  function renderQuizQuestions() {
    if (
      quizStatus === 'active' &&
      !answerStatus &&
      (timerStatus === 'active' || 'paused')
    )
      return (
        <QuizQuestions
          currentQuestion={currentQuestion}
          validateAnswer={validateAnswer}
        />
      );
  }

  return (
    <>
      {renderGameLandingPage()}
      {renderHeader()}
      {renderQuizQuestions()}
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

import React from 'react';

import Questions from '../data/questions.json';

import { timeAllowance } from '@/constants';
import { getRandomQuestion } from '@/utils';

import GameLandingPage from '@/components/GameLandingPage/GameLandingPage';
import { Header } from '@/components/Header/Header';
import { QuizQuestions } from '@/components/QuizQuestions/QuizQuestions';
import { QuizEnd } from '@/components/QuizEnd/QuizEnd';
import { QuizQuestionResult } from '@/components/QuizQuestionResult/QuizQuestionResult';

export default function QuizPage() {
  

  const [timerStatus, setTimerStatus] = React.useState('idle'); // idle | active | expired | paused
  const [quizStatus, setQuizStatus] = React.useState('idle'); // idle | active | end

  const [currentQuestion, setCurrentQuestion] = React.useState({});
  const [usedQuestions, setUsedQuestions] = React.useState([]);

  const [answerStatus, setAnswerStatus] = React.useState(undefined); // undefined | correct | incorrect
  const [questionCount, setquestionCount] = React.useState(0);
  const [correctAnswers, setCorrectAnswers] = React.useState(0);
  const [percentComplete, setPercentComplete] = React.useState(0);

  const [modalOpen, setModalOpen] = React.useState(false);

  React.useEffect(() => {
    if (questionCount === 0) {
      setPercentComplete(0);
      return;
    }
    if (quizStatus === 'end') {
      setPercentComplete(100);
      return;
    } else {
      setPercentComplete((questionCount / Questions.length) * 100);
    }
  }, [questionCount, quizStatus]);

  function handleQuizStart() {
    setQuizStatus('active');
    setTimerStatus('active');
  }

  function validateAnswer(answerValue) {
    setTimerStatus('idle');
    setTime(timeAllowance);

    console.log("answerValue from validate Answer function",answerValue)

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
    }, 2500);
  }

  function progressQuiz() {
    setUsedQuestions(prev => [...prev, randomNum]);
    if (questionCount === Questions.length - 1) {
      setQuizStatus('end');
      setTimerStatus('idle');
    } else {
      setquestionCount(questionCount + 1);
      setTimerStatus('active');
    }
  }

  function handleTimeExpired() {
    setTimerStatus('expired');
    setTime(timeAllowance);
    setTimeout(() => {
      progressQuiz();
    }, 2500);
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
    if (quizStatus === 'idle') {
      return;
    }
    return (
      <Header
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        timerStatus={timerStatus}
        setTimerStatus={setTimerStatus}
        percentComplete={percentComplete}
        handleTimeExpired={handleTimeExpired}
      />
    );
  }

  function renderQuizQuestions() {
    if (
      quizStatus === 'active' &&
      !answerStatus &&
      timerStatus !== 'expired' &&
      timerStatus !== 'idle'
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
      {/* {renderQuizQuestions()} */}
      {answerStatus && (
        <QuizQuestionResult
          answerStatus={answerStatus}
          correctAnswer={currentQuestion.answer}
        />
      )}
      {timerStatus === 'expired' && (
        <QuizQuestionResult answerStatus='expired' />
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

import React from 'react';
import { useRef } from 'react';

import Questions from '../data/questions.json';

import { getRandomQuestion } from '@/utils/Randomizers';

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
  const [questionCount, setQuestionCount] = React.useState(undefined);
  const [correctAnswers, setCorrectAnswers] = React.useState(0);

  const [modalOpen, setModalOpen] = React.useState(false);

  const refTimeout = useRef(null);

  const populateQuestion = () => {
    const [randomNum, randomQuestion] =
      getRandomQuestion(usedQuestions);

    setCurrentQuestion(randomQuestion);

    if (!usedQuestions.includes(randomNum)) {
      setUsedQuestions(prev => [...prev, randomNum]);
    }
  };

  function handleQuizStart() {
    setQuizStatus('active');
    setTimerStatus('active');
    setQuestionCount(0);
    populateQuestion();
  }

  function validateAnswer(answerValue) {
    const { answer } = currentQuestion;

    setTimerStatus('idle');

    if (answerValue === answer) {
      setAnswerStatus('correct');
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setAnswerStatus('incorrect');
    }
    progressQuiz();
  }

  function progressQuiz(delay = 1500) {
    if (refTimeout.current) {
      clearTimeout(refTimeout.current);
    }
    
    refTimeout.current = setTimeout(() => {
      setAnswerStatus(undefined);
      if (questionCount === Questions.length - 1) {
        setQuizStatus('end');
        setTimerStatus('idle');
      } else {
        setQuestionCount(questionCount + 1);
        populateQuestion();
        setTimerStatus('active');
      }
    }, delay);
  }

  function handleTimeExpired() {
    setTimerStatus('expired');
    setTimeout(() => {
      setTimerStatus('idle');
      setQuizStatus('end');
    }, 2000);
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
        handleTimeExpired={handleTimeExpired}
        questionCount={questionCount}
        quizStatus={quizStatus}
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
      {renderQuizQuestions()}
      {answerStatus && (
        <QuizQuestionResult
          answerStatus={answerStatus}
          correctAnswer={currentQuestion.answer}
          immediatelyProgressQuiz={() => progressQuiz(0)}
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

import React from 'react';

import Timer from '@/components/Timer/Timer';
import Button from '@/components/Button/Button';
import GameLandingPage from '@/components/GameLandingPage/GameLandingPage';

import Questions from '../data/questions.json';

export default function Quiz() {
  const [quizActive, setQuizActive] = React.useState(false);
  const [disableButton, setDisableButton] = React.useState(false);
  const [questionNumber, setQuestionNumber] = React.useState(1);
  const [answerStatus, setAnswerStatus] = React.useState({
    correct: false,
    incorrect: false,
    timeExpired: false,
  });
  const [numOfCorrectAnswers, SetNumOfCorrectAnswers] =
    React.useState(0);

  const currentQuestion = Questions[questionNumber];

  function handleClick(buttonValue) {
    const index = currentQuestion.answer;

    if (buttonValue === currentQuestion.options[index]) {
      setAnswerStatus({ ...answerStatus, correct: true });
      setTimeout(() => {
        setAnswerStatus({ ...answerStatus, correct: false });
      }, 3000);

      SetNumOfCorrectAnswers(numOfCorrectAnswers + 1);
      setQuestionNumber(questionNumber + 1);
    } else {
      // setAnswerStatus({ ...answerStatus, incorrect: true });
      setQuestionNumber(questionNumber + 1);
    }
  }
  return (
    <>
      {!quizActive ? (
        <GameLandingPage
          GameType='Quiz'
          onClick={setQuizActive}
        />
      ) : (
        <>
          {answerStatus.correct ? (
            <h1>Correct</h1>
          ) : (
            <>
              <h1 style={{ color: 'white' }}>Quiz</h1>
              <p>{currentQuestion.question}</p>
              {currentQuestion.options.map((option, index) => {
                return (
                  <Button
                    key={index}
                    disabled={disableButton}
                    onClick={() => handleClick(option)}
                  >
                    {option}
                  </Button>
                );
              })}
            </>
          )}
        </>
      )}
    </>
  );
}

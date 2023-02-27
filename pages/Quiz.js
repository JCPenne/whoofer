import React from 'react';

import Timer from '@/components/Timer/Timer';
import Button from '@/components/Button/Button';
import GameLandingPage from '@/components/GameLandingPage/GameLandingPage';

import Questions from '../data/questions.json';

export default function Quiz() {
  const [quizActive, setQuizActive] = React.useState(false);
  const [disableButton, setDisableButton] = React.useState(false);
  const [questionNumber, setQuestionNumber] = React.useState(1);

  const currentQuestion = Questions[questionNumber];

  function handleClick(buttonValue) {
    if (buttonValue === currentQuestion.answer) {
      console.log('correct');
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
          <h1 style={{ color: 'white' }}>Quiz</h1>
          <Timer
            numOfSecs={10}
            timeExpired={setDisableButton}
          ></Timer>
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
  );
}

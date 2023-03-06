import React from 'react';

export function QuizQuestionResult({ answerStatus, timeExpired }) {
  return (
    <>
      {timeExpired && <h1>Times up!</h1>}
      {answerStatus && <h1>{answerStatus}</h1>}
    </>
  );
}

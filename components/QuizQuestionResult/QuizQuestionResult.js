import React from 'react';

export function QuizQuestionResult({ answerStatus, timerExpired }) {
  const { correct, incorrect } = answerStatus;
  if (correct) {
    return <h1>Correct!</h1>;
  }
  if (incorrect) {
    return <h1>Incorrect!</h1>;
  }
  if (timerExpired && !correct && !incorrect) {
    return <h1>Time Expired!</h1>;
  }
}

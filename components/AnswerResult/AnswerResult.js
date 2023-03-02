export function AnswerResult({ answerStatus }) {
  return (
    <>
      {answerStatus.correct && <h1>Correct!</h1>}
      {answerStatus.incorrect && <h1>Incorrect!</h1>}
      {answerStatus.timeExpired && <h1>Times up!</h1>}
    </>
  );
}

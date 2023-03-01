export function AnswerResult({ answerStatus }) {
  return (
    <>
      {answerStatus.correct ? <h1>Correct!</h1> : <h1>Incorrect!</h1>}
    </>
  );
}

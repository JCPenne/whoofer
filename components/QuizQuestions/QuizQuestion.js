import Button from '../Button/Button';

export function QuizQuestion({ currentQuestion, setAnswerStatus }) {
  function handleClick(value) {
    const { answer, options } = currentQuestion;

    value === options[answer]
      ? (setAnswerStatus = 'correct')
      : (setAnswerStatus = 'incorrect');
  }

  return (
    <>
      <p>{currentQuestion.question}</p>
      {currentQuestion.options.map((answerValue, index) => {
        return (
          <Button
            key={index}
            onClick={() => handleClick(answerValue)}
          >
            {answerValue}
          </Button>
        );
      })}
    </>
  );
}

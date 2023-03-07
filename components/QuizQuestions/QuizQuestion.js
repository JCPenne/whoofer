import Button from '../Button/Button';

export function QuizQuestion({ currentQuestion, validateAnswer }) {
  return (
    <>
      <p>{currentQuestion.question}</p>
      {currentQuestion.options.map((answerValue, index) => {
        return (
          <Button
            key={index}
            onClick={() => validateAnswer(answerValue)}
          >
            {answerValue}
          </Button>
        );
      })}
    </>
  );
}

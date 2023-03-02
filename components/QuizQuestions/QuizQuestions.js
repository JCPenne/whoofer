import Button from '../Button/Button';

export function QuizQuestions({currentQuestion, onClick, disableButtons}) {
  return (
    <>
      <p>{currentQuestion.question}</p>
      {currentQuestion.options.map((option, index) => {
        return (
          <Button
            key={index}
            disabled={disableButtons}
            onClick={() => onClick(option)}
          >
            {option}
          </Button>
        );
      })}
    </>
  );
}

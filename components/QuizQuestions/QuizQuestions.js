import Button from '../Button/Button';

export function QuizQuestions({ currentQuestion, onClick }) {
  return (
    <>
      <p>{currentQuestion.question}</p>
      {currentQuestion.options.map((option, index) => {
        return (
          <Button
            key={index}
            onClick={() => onClick(option)}
          >
            {option}
          </Button>
        );
      })}
    </>
  );
}

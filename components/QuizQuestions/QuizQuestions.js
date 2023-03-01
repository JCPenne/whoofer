import Button from '../Button/Button';

export function QuizQuestions({currentQuestion, handleClick, disableButton}) {
  return (
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
  );
}
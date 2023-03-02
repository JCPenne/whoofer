import React from 'react';
import Link from 'next/link';
import Button from '@/components/Button/Button';

export function QuizEnd({ quizLength, correctAnswers }) {
  const [showResults, setShowResults] = React.useState(false);
  return (
    <>
      {!showResults ? (
        <>
          <h1>End of Quiz</h1>
          <Button onClick={() => setShowResults(true)}>
            Show Results
          </Button>
        </>
      ) : (
        <>
          <>{`You answered ${correctAnswers} out of ${quizLength} questions correctly!`}</>
          <Link href='/'>
            <Button>Home</Button>
          </Link>
        </>
      )}
    </>
  );
}

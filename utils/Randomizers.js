import Questions from '../data/questions.json';

export function getRandomQuestion(usedQuestions) {
  let max = Questions.length - 1;
  let min = 0;
  let randomNum = Math.floor(Math.random() * (max - min + 1) + min);

  while (usedQuestions.includes(randomNum)) {
    randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  }
  return [randomNum, Questions[randomNum]];
}

export function randomizeAnswers(answers) {
  let oldElement;

  for (let i = answers.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    oldElement = answers[i];
    answers[i] = answers[j];
    answers[j] = oldElement;
  }
  return answers;
}

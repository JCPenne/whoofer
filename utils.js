import Questions from './data/questions.json';

export function getRandomQuestion(usedQuestions) {
  let max = Questions.length;
  let min = 0;
  let randomNum = Math.floor(Math.random() * (max - min + 1) + min);

  while (usedQuestions.includes(randomNum)) {
    randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  }
  console.log(
    'getRandomQuestion called randomQuestion ->',
    Questions[randomNum],
    'randomNum -->',
    randomNum
  );
  return [randomNum, Questions[randomNum]];
}

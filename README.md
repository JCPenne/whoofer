# Whoofer

A stylized Dog Breed Quiz App, written in React & NextJS.
Built for a deeper understanding of React, NextJS and CSS Modules.
For having fun, and for the love of dogs!

<div align='center'>
  <img src="https://github.com/JCPenne/whoofer/blob/main/images/Homepage.png" width="200" height="100">
  <img src="https://github.com/JCPenne/whoofer/blob/main/images/Quizpage.png" width="200" height="100">
</div>
<div align='center'>
  <img src="https://github.com/JCPenne/whoofer/blob/main/images/Quiz.png" width="100" height="200">
  <img src="https://github.com/JCPenne/whoofer/blob/main/images/Incorrect.png" width="100" height="200">
</div>

## Highlights

The <a href="https://github.com/JCPenne/whoofer/blob/main/pages/quiz.js">Quiz Page</a> houses numerous rendering logic and helper functions for the Quiz itself.

The <a href="https://github.com/JCPenne/whoofer/blob/main/utils">Utils</a> folder houses a custom Randomizer function to provide a random sequence of questions to each user of the quiz
```
export function getRandomQuestion(usedQuestions) {
  let max = Questions.length - 1;
  let min = 0;
  let randomNum = Math.floor(Math.random() * (max - min + 1) + min);

  while (usedQuestions.includes(randomNum)) {
    randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  }
  return [randomNum, Questions[randomNum]];
}
```

## Getting Started

This site is hosted on [Whoofer](https://whoofer.vercel.app) and the live version can be visited there.

For a local version, once you have cloned the repo, run `npm i` to install all dependencies. And then `npm run dev` to fire up a local NextJS server instance.

## Built With

* [React](https://react.dev/)
* [NextJS](https://nextjs.org/) - A React Framework
* [Vercel](https://vercel.com/) - Used for deployment and analytics

## Acknowledgments

* [Ameera Ali](https://www.linkedin.com/in/ameera-ali-m/) - UI/UX Design 
* [Matt Banh](https://www.linkedin.com/in/mattbanh/) - Code Reviews

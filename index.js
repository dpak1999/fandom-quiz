/** @format */

import chalk from "chalk";
import readLine from "readline-sync";
import { questionsArray, highScore } from "./utils.js";

console.log(chalk.bold.red("Welcome to THE ARROW quiz"));
const userName = readLine.question("What is you name?\n");
console.log(
  chalk.magenta.italic.bold(
    `Hi ${userName ? userName.toLocaleUpperCase() : "buddy"} lets start`
  )
);

let score = 0;

const evalute = (question, option, answer) => {
  console.log(chalk.bgCyan.red.bold(question));
  const userInput = readLine.keyInSelect(option);

  if (option[userInput] === answer) {
    score += 1;
    console.log(
      chalk.green.bold(`Wohoo!! correct answer. Your score is ${score}`)
    );
  } else {
    console.log(chalk.red(`Oops!! Wrong answer your score is ${score}`));
  }

  return score;
};

for (let i = 0; i < questionsArray.length; i++) {
  evalute(
    questionsArray[i].question,
    questionsArray[i].options,
    questionsArray[i].answer
  );
}

console.log(chalk.cyanBright.bold("\nYour Score is " + score));

if (score >= highScore[0].score) {
  console.log(
    chalk.green.bold("\nYayyy!! You scored the Highest Score! Congratulations!")
  );
} else {
  console.log(chalk.green.underline("Here are the highscores"));
  for (let i = 0; i < highScore.length; i++) {
    console.log(highScore[i].name, highScore[i].score);
  }
}

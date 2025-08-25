/*IF user puts in rock,paper,or scissors THEN computer responds
with rock, paper, or scissors.

IF rock is chosen against rock THEN then it will be a draw (no point)
IF rock is chosen against paper THEN rock loses (give point to paper)
IF rock is chosen against scissors THEN rock wins (give point to rock)

IF paper is chosen against paper THEN then it will be a draw (no point)
IF paper is chosen against scissors THEN paper loses (give point to scissors)
IF paper is chosen against rock THEN paper wins (give point to paper)

IF scissors is chosen against scissors THEN then it will be a draw
IF scissors is chosen against rock THEN scissors loses
IF scissors is chosen against paper THEN scissors wins

ONCE total point of 3 is reached display winner and stop.*/

const rock = 0;
const paper = 1;
const scissors = 2;
let humanScore = 0;
let computerScore = 0;
let userChoiceNum;

function getPlayersChoice() {
  let input = prompt("Please enter rock, paper or scissors");
  return input.toUpperCase();
}
function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

while (humanScore < 3 && computerScore < 3) {
  let userPlayed = getPlayersChoice();
  if (userPlayed === "ROCK") {
    console.log("You played rock");
  } else if (userPlayed === "SCISSORS") {
    console.log("You played scissors");
  } else if (userPlayed === "PAPER") {
    console.log("You played paper");
  }

  let computerPlayed = getComputerChoice();

  if (computerPlayed === rock) {
    console.log("computer played rock");
  } else if (computerPlayed === paper) {
    console.log("computer played paper");
  } else if (computerPlayed === scissors) {
    console.log("Computer played scissors");
  }

  const choices = { ROCK: 0, PAPER: 1, SCISSORS: 2 };
  let userChoiceNum = choices[userPlayed];

  const result = (userChoiceNum - computerPlayed + 3) % 3;

  if (result === 0) {
    console.log(
      `It's a draw!. The score remains ${humanScore}:${computerScore}`
    );
  } else if (result === 1) {
    humanScore++;
    console.log(`user won, the score is ${humanScore}:${computerScore}`);
  } else {
    computerScore++;
    console.log(`computer won, the score is ${humanScore}:${computerScore}`);
  }

  function playRound(computerPlayed, userPlayed) {}
}
console.log("Game Over!");

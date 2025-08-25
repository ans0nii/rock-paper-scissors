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

function getPlayersChoice() {
  let input = prompt("Please enter rock, paper or scissors");
  return input;
}

let userPlayed = getPlayersChoice();
if (userPlayed === "rock") {
  console.log("You played rock");
} else if (userPlayed === "scissors") {
  console.log("You played scissors");
} else if (userPlayed === "paper") {
  console.log("You played paper");
}

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

let computerChoice = getComputerChoice();

if (computerChoice === rock) {
  console.log("computer played rock");
} else if (computerChoice === paper) {
  console.log("computer played paper");
} else if (computerChoice === scissors) {
  console.log("Computer played scissors");
}



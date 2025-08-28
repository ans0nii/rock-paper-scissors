const rock = 0;
const paper = 1;
const scissors = 2;
let humanScore = 0;
let computerScore = 0;
let userChoiceNum;

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function playGame(userPlayed) {
  userPlayed = userPlayed.toUpperCase();

  if (userPlayed === "ROCK") {
    console.log("You played rock");
  } else if (userPlayed === "SCISSORS") {
    console.log("You played scissors");
  } else if (userPlayed === "PAPER") {
    console.log("You played paper");
  }

  let computerPlayed = getComputerChoice();

  if (computerPlayed === rock) {
    console.log("Computer played rock");
  } else if (computerPlayed === paper) {
    console.log("Computer played paper");
  } else if (computerPlayed === scissors) {
    console.log("Computer played scissors");
  }

  const choices = { ROCK: 0, PAPER: 1, SCISSORS: 2 };
  userChoiceNum = choices[userPlayed];

  const result = (userChoiceNum - computerPlayed + 3) % 3;

  if (result === 0) {
    console.log(
      `It's a draw!. The score remains ${humanScore}:${computerScore}`
    );
  } else if (result === 1) {
    humanScore++;
    console.log(`User won, the score is ${humanScore}:${computerScore}`);
  } else {
    computerScore++;
    console.log(`Computer won, the score is ${humanScore}:${computerScore}`);
  }
}

const buttons = document.querySelectorAll(".user-played button");
let gameOver = false;

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (gameOver) return;
    const playerChoice = e.target.dataset.choice;
    playGame(playerChoice);
    if (humanScore === 3 || computerScore === 3) {
      console.log("Game Over!");
      gameOver = true;
    }
  });
});


const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const resultDiv = document.querySelector("#result");
const scoreDiv = document.querySelector("#score");
const gameOverDiv = document.querySelector("#gameOverDiv");
const playAgainBtn = document.querySelector(".playAgainBtn");

var playerScore = 0;
var computerScore = 0;

const updateScoreUi = () => {
  scoreDiv.textContent = `Player score: ${playerScore} | Computer score: ${computerScore}`;
  if (playerScore === 5) {
    gameOver("Congratulations, you Win!");
  }
  if (computerScore === 5) {
    gameOver("Computer wins! Better luck next time...")
  }
};

const gameOver = (gameOverText) => {
  playAgainBtn.classList.remove("hidden");
  gameOverDiv.classList.remove("hidden");
  gameOverDiv.classList.add("gameOverDiv");
  gameOverDiv.textContent = gameOverText;
}

updateScoreUi();

playAgainBtn.addEventListener("click", () => {
  restartGame();
});

rockBtn.addEventListener("click", () => {
  selectPlayerOption("rock");
});

paperBtn.addEventListener("click", () => {
  selectPlayerOption("paper");
});

scissorsBtn.addEventListener("click", () => {
  selectPlayerOption("scissors");
});

const restartGame = () => {
  playAgainBtn.classList.add("hidden");
  gameOverDiv.textContent = "";
  gameOverDiv.classList.remove("gameOverDiv");
  gameOverDiv.classList.add("hidden");
  playerScore = 0;
  computerScore = 0;
  updateScoreUi();
};

const getComputerChoice = () => {
  const randomInt = Math.floor(Math.random() * 3);
  switch (randomInt) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return "rock";
  }
};

const playSingleRound = (playerSelection, compuerSelection) => {
  if (playerSelection.toLowerCase() === compuerSelection.toLowerCase()) {
    return "It's a draw!";
  }
  switch (playerSelection.toLowerCase()) {
    case "rock":
      if (compuerSelection === "paper") {
        computerScore++;
        updateScoreUi();
        return "You lose! Paper beats Rock";
      } else {
        playerScore++;
        updateScoreUi();
        return "You win! Rock beats Scissors";
      }
    case "paper":
      if (compuerSelection === "scissors") {
        computerScore++;
        updateScoreUi();
        return "You lose! Scissors beats Paper";
      } else {
        playerScore++;
        updateScoreUi();
        return "You win! Paper beats Rock";
      }
    case "scissors":
      if (compuerSelection === "rock") {
        computerScore++;
        updateScoreUi();
        return "You lose! Rock beats Scissors";
      } else {
        playerScore++;
        updateScoreUi();
        return "You win! Scissors beats Paper";
      }
    default:
      return "It's a draw!";
  }
};

const selectPlayerOption = (selection) => {
  if (playerScore >= 5 || computerScore >= 5) return;

  const playerSelection = selection;
  const computerSelection = getComputerChoice();

  resultDiv.textContent = playSingleRound(playerSelection, computerSelection);
};

// Variable Declarations
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
const resultDiv = document.querySelector('#result');
const scoreDiv = document.querySelector('#score');
const gameOverDiv = document.querySelector('.gameOverDiv');
const playAgainBtn = document.querySelector('.playAgainBtn');
const gameOverTextDiv = document.querySelector('#gameOverText');
const rockAudio = document.querySelector('#rockAudio');
const paperAudio = document.querySelector('#paperAudio');
const scissorsAudio = document.querySelector('#scissorsAudio');

var playerScore = 0;
var computerScore = 0;

const updateScoreUi = () => {
  scoreDiv.textContent = `Player score: ${playerScore} | Computer score: ${computerScore}`;
  computerScore >= 5 && gameOver('Computer wins! Better luck next time...');
  playerScore >= 5 && gameOver('Congratulations, you Win!');
};

updateScoreUi();

const gameOver = (gameOverText) => {
  gameOverDiv.classList.remove('hidden');
  gameOverDiv.classList.add('gameOverDiv');
  gameOverTextDiv.textContent = gameOverText;
};

const restartGame = () => {
  gameOverTextDiv.textContent = '';
  gameOverDiv.classList.remove('gameOverDiv');
  gameOverDiv.classList.add('hidden');
  playerScore = 0;
  computerScore = 0;
  updateScoreUi();
  resultDiv.textContent = '';
};

const getComputerChoice = () => {
  const randomInt = Math.floor(Math.random() * 3);
  switch (randomInt) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    default:
      return 'rock';
  }
};

const playSingleRound = (playerSelection, compuerSelection) => {
  // Check for Draw
  if (playerSelection.toLowerCase() === compuerSelection.toLowerCase()) {
    return "It's a draw!";
  }
  // Evaluate Results
  switch (playerSelection.toLowerCase()) {
    case 'rock':
      compuerSelection === 'paper' ? computerScore++ : playerScore++;
      updateScoreUi();
      return compuerSelection === 'paper'
        ? 'You lose! Paper beats Rock'
        : 'You win! Rock beats Scissors';
    case 'paper':
      compuerSelection === 'scissors' ? computerScore++ : playerScore++;
      updateScoreUi();
      return compuerSelection === 'scissors'
        ? 'You lose! Scissors beats Paper'
        : 'You win! Paper beats Rock';
    case 'scissors':
      compuerSelection === 'rock' ? computerScore++ : playerScore++;
      updateScoreUi();
      return compuerSelection === 'rock'
        ? 'You lose! Rock beats Scissors'
        : 'You win! Scissors beats Paper';
    default:
      return 'Something went wrong!';
  }
};

const selectPlayerOption = (selection) => {
  if (playerScore >= 5 || computerScore >= 5) return;
  resultDiv.textContent = playSingleRound(selection, getComputerChoice());
};

// Event Listeners

playAgainBtn.addEventListener('click', () => {
  restartGame();
});

rockBtn.addEventListener('click', () => {
  selectPlayerOption('rock');
  rockAudio.play();
});

paperBtn.addEventListener('click', () => {
  selectPlayerOption('paper');
  paperAudio.play();
});

scissorsBtn.addEventListener('click', () => {
  selectPlayerOption('scissors');
  scissorsAudio.play();
});

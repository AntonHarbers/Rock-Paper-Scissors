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
    if (playerSelection.toLowerCase() === compuerSelection.toLowerCase()) {
        return 'It\'s a draw!';
    }
    switch (playerSelection.toLowerCase()) {
        case 'rock':
        return compuerSelection === 'paper' ? 'You lose! Paper beats Rock' : `You Win! Rock beats Scissors`;
        case 'paper':
        return compuerSelection === 'scissors' ? 'You lose! Scissors beats Paper' : `You Win! Paper beats Rock`;
        case 'scissors':
        return compuerSelection === 'rock' ? 'You lose! Rock beats Scissors' : 'You Win! Scissors beats Paper';
        default:
        return 'It\'s a draw!';
    }
}

const game = () => {
    var round = 0;

    while(round < 5){
        const playerSelection = prompt('Rock, Paper or Scissors?');
        const computerSelection = getComputerChoice();
        console.log(playSingleRound(playerSelection, computerSelection));
        round++;
    }
}

game();

//9

const prompt = require('prompt-promise');

async function playRockPaperScissors() {
  console.log('Make your move: rock, paper, or scissors');
  const move = await prompt();

  let computerMove;
  if (move === 'rock') {
    computerMove = 'scissors';
  } else if (move === 'paper') {
    computerMove = 'rock';
  } else if (move === 'scissors') {
    computerMove = 'paper';
  } else {
    console.log('Invalid move. Please try again.');
    return playRockPaperScissors();
  }

  console.log(`You played ${move}, I played ${computerMove}.`);
  console.log(`I win!`);
}

playRockPaperScissors();
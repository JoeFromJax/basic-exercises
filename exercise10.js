//10 

const prompt = require('prompt-promise');

async function playRockPaperScissors() {
  console.log('Make your move: rock, paper, or scissors');
  const move = await prompt();

  const moves = ['rock', 'paper', 'scissors'];
  const computerMove = moves[Math.floor(Math.random() * moves.length)];

  if (!moves.includes(move)) {
    console.log('Invalid move. Please try again.');
    return playRockPaperScissors();
  }

  console.log(`You played ${move}, I played ${computerMove}.`);
  if (move === computerMove) {
    console.log(`It's a tie!`);
  } else if (
    (move === 'rock' && computerMove === 'scissors') ||
    (move === 'paper' && computerMove === 'rock') ||
    (move === 'scissors' && computerMove === 'paper')
  ) {
    console.log(`You win!`);
  } else {
    console.log(`I win!`);
  }
}

playRockPaperScissors();
console.log("Hello World");

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  let choice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
}

function playGame() {
  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}`);
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection);
  }
  
  console.log("Game Over!");
  if (humanScore > computerScore) {
    console.log(`You win the game! Final score: ${humanScore} to ${computerScore}`);
  } else if (humanScore < computerScore) {
    console.log(`You lose the game! Final score: ${humanScore} to ${computerScore}`);
  } else {
    console.log(`It's a tie game! Final score: ${humanScore} to ${computerScore}`);
  }
}

playGame();

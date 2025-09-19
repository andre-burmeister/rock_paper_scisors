
function getComputerChoice() {
  // Solution without arrays:
  const index = Math.floor(Math.random() * 3);
  switch (index) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    default: // case 2
      return "scissors";
  };
};

const makeFirstLetterUpper = (s) => s[0].toUpperCase() + s.slice(1);

function playGame() {

  let humanScore = 0;
  let computerScore = 0;
  const choiceArr = ['rock', 'paper', 'scissors'];

  function playRound(humanChoice, computerChoice) {
    const choiceIndDiff = choiceArr.indexOf(humanChoice) - choiceArr.indexOf(computerChoice);

    const player = document.querySelector(".player")
    const computer = document.querySelector(".computer")
    const result = document.querySelector(".result")
    player.textContent = `You picked: ${humanChoice}`;
    computer.textContent = `Computer picked: ${computerChoice}`;

    if (choiceIndDiff === 0) { // Draw
      result.textContent = `It's a draw!`;
      return;
    } else if (choiceIndDiff === 1 || choiceIndDiff === -2) { // Human wins
      humanScore += 1;
      result.textContent = `${makeFirstLetterUpper(humanChoice)} beats ${computerChoice}! You win!`;
    } else if (choiceIndDiff === -1 || choiceIndDiff === 2) { // Human loses
      computerScore += 1;
      result.textContent = `\n${makeFirstLetterUpper(computerChoice)} beats ${humanChoice}! You loose!`;
    };
  };

  const buttons = document.querySelector(".buttons")
  buttons.addEventListener('click', (e) => {
    playRound(e.target.textContent.toLowerCase(), getComputerChoice())
  })

  // let i = 1;
  // while (i<=5 && humanScore < 3 && computerScore < 3) {
  //   console.log(`\n\nRound ${i}`);
  //   playRound(getHumanChoice(), getComputerChoice());
  //   console.log(`Score: you (${humanScore}) x computer (${computerScore})`);
  //   i++;
  // };
  
  if (humanScore > computerScore) {
    console.log(`Congratulations! You won!`);
  } else if (computerScore > humanScore) {
    console.log("The computer won! You loose!");
  } else if (computerScore === humanScore) {
    console.log("You played five rounds! It's a draw!");
  }

  console.log('\n\n\nTo play again, refresh the page.');
};

playGame();

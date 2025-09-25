
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

    const result = document.querySelector(".result");
    result.innerHTML = `You picked: ${humanChoice}<br>`;
    result.innerHTML += `Computer picked: ${computerChoice}<br>`;

    if (choiceIndDiff === 0) { // Draw
      result.innerHTML += `It's a draw!<br>`;
    } else if (choiceIndDiff === 1 || choiceIndDiff === -2) { // Human wins
      humanScore += 1;
      result.innerHTML += `${makeFirstLetterUpper(humanChoice)} beats ${computerChoice}! You win!<br>`;
    } else if (choiceIndDiff === -1 || choiceIndDiff === 2) { // Human loses
      computerScore += 1;
      result.innerHTML += `${makeFirstLetterUpper(computerChoice)} beats ${humanChoice}! You loose!<br>`;
    };

    result.innerHTML += `You: ${humanScore}<br>Computer: ${computerScore}`;
  };

  function endGame() {
    const finalMessage = document.querySelector(".final");
    if (humanScore >= 5) {
      finalMessage.innerHTML = `Congratulations! You won!<br>
        Click any button to play again.`;
      humanScore = 0;
      computerScore = 0;
    } else if (computerScore >= 5) {
      finalMessage.innerHTML = `Congratulations! You won!<br>
        Click any button to play again.`;
      humanScore = 0;
      computerScore = 0;
    };
  };

  const buttons = document.querySelector(".buttons");
  buttons.addEventListener('click', (e) => {
    const finalMessage = document.querySelector(".final");
    finalMessage.innerHTML = ''


    playRound(e.target.textContent.toLowerCase(), getComputerChoice());
    endGame();
  });
};

playGame();

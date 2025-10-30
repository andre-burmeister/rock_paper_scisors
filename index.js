
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

const CHOICE_ARR = ['rock', 'paper', 'scissors'];

function playGame() {

  let humanScore = 0;
  let computerScore = 0;

  const activeContainer = document.querySelector(".active");
  const result = document.createElement("p");
  result.className = "result message";
  


  function playRound(humanChoice, computerChoice) {
    const choiceIndDiff = CHOICE_ARR.indexOf(humanChoice) - CHOICE_ARR.indexOf(computerChoice);
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
    activeContainer.appendChild(result)
  };

  const gameButtons = createGameButtons();
  activeContainer.appendChild(gameButtons);

  function endGame() {
    humanScore = 0;
    computerScore = 0;
    activeContainer.replaceChildren();
    activeContainer.appendChild(result);

    startGame("Play Again");
  };

  gameButtons.addEventListener('click', (e) => {
    result.innerHTML = '';
    playRound(e.target.textContent.toLowerCase(), getComputerChoice());
    if (humanScore >= 5) {
      result.innerHTML = `Congratulations! You won!<br>
      You: ${humanScore}<br>Computer: ${computerScore}`;
      endGame();
    } else if (computerScore >= 5) {
      result.innerHTML = `Computer won! You lose!
      <br>
      You: ${humanScore}<br>Computer: ${computerScore}`;
      endGame();
    };
  });
};

function startGame(message) {
  const activeContainer = document.querySelector(".active");
  const uiButtons = createUiButtons(message);
  const startButton = uiButtons.lastChild;

  startButton.addEventListener('click', (e) => {
    activeContainer.replaceChildren();
    playGame();
  });

  activeContainer.appendChild(uiButtons);
};

function createGameButtons() {
  const gameButtons = document.createElement("div")
  gameButtons.classList.add("game", "buttons");
  for (let choice of CHOICE_ARR) {
    const button = document.createElement('button');
    button.classList.add(choice);
    button.textContent = makeFirstLetterUpper(choice);
    gameButtons.appendChild(button);
  };
  return gameButtons;
}

function createUiButtons(message) {
  const uiButtons = document.createElement("div");
  uiButtons.classList.add("ui", "buttons");

  const startButton = document.createElement("button");
  startButton.classList.add("start");
  startButton.textContent = message;

  uiButtons.appendChild(startButton);
  return uiButtons;
};

startGame("Start");


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

  function playRound(humanChoice, computerChoice) {
    const choiceIndDiff = CHOICE_ARR.indexOf(humanChoice) - CHOICE_ARR.indexOf(computerChoice);

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

  const buttonsContainer = document.querySelector(".buttons.container");
  const gameButtons = createGameButtons();
  buttonsContainer.appendChild(gameButtons);

  function endGame() {
    humanScore = 0;
    computerScore = 0;
    buttonsContainer.replaceChildren();
    const messagesChildren = document.querySelector(".messages").childNodes;
    messagesChildren.forEach((message) => {
      message.textContent = ""
    })

    startGame("Play Again");
  };

  gameButtons.addEventListener('click', (e) => {
    const finalMessage = document.querySelector(".final");
    finalMessage.innerHTML = ''
    playRound(e.target.textContent.toLowerCase(), getComputerChoice());
    if (humanScore >= 5) {
      finalMessage.innerHTML = `Congratulations! You won!`;
      endGame();
    } else if (computerScore >= 5) {
      finalMessage.innerHTML = `Computer won! You lose!`;
      endGame();
    };
  });
};

function startGame(message) {
  const buttonsContainer = document.querySelector(".buttons.container");
  const uiButtons = createUiButtons(message);
  const startButton = uiButtons.firstChild

  startButton.addEventListener('click', (e) => {
    buttonsContainer.removeChild(uiButtons);
    playGame();
  });

  buttonsContainer.appendChild(uiButtons);
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

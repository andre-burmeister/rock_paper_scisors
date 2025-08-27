
function getComputerChoice() {
  // Solution without arrays:
  const index = Math.floor(Math.random() * 3)
  switch (index) {
    case 0:
      return "rock"
    case 1:
      return "paper"
    default: // case 2
      return "scissors"
  }

  // Solution with arrays:
  // const index = Math.floor(Math.random() * 3)
  // return ["rock", "paper", "scissors"][index]
}

function getHumanChoice() {
  return prompt("Write rock, paper, or scissors:")
}


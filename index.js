
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
  return prompt("Write rock, paper, or scissors:").toLowerCase()
}

let humanScore = 0
let computerScore = 0
const choiceArr = ['rock', 'paper', 'scissors']

const firstUpper = (s) => s[0].toUpperCase() + s.slice(1)

function playRound(humanChoice, computerChoice) {
  const choiceDiff = choiceArr.indexOf(humanChoice) - choiceArr.indexOf(computerChoice)
  console.log(`You picked: ${humanChoice}\nComputer picked: ${computerChoice}`)
  if (choiceDiff === 0) {
    console.log(`It's a draw!`)
    return
  } else if (choiceDiff === 1 || choiceDiff === -2) {
    console.log(`${firstUpper(humanChoice)} beats ${computerChoice}! You win!`)
  } else if (choiceDiff === -1 || choiceDiff === 2) {
    console.log(`${firstUpper(computerChoice)} beats ${humanChoice}! You loose!`)
  }
}

playRound(getHumanChoice(), getComputerChoice())

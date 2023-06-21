// getComputerChoice() randomly returns "Rock", "Paper", or "Scissors"
function getComputerChoice() {
    let gameChoices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * gameChoices.length);

    return (gameChoices[randomIndex]);
}

// storing the choice selected by the computer
const computerSelection = getComputerChoice();


// playRound handles the gameplay and announces winners/losers
function playRound (playerSelection, computerSelection) {
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    // tie!
    if (playerSelection === computerSelection) {
        return "It is a tie!";
    }

    // rock beats scissors
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats Scissors.";
    
    // scissors beats paper
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats Paper.";
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        return "You lose! Scissors beats Paper.";
    
    // paper beats rock
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock.";
    } else {
        return "You lose! Paper beats Rock.";
    }
}

// testing...
const playerSelection = "rock";
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
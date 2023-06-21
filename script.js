// getComputerChoice() randomly returns "Rock", "Paper", or "Scissors"
function getComputerChoice() {
    let gameChoices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * gameChoices.length);

    return (gameChoices[randomIndex]);
}

// storing the choice selected by the computer
const computerSelection = getComputerChoice();

// playerSelection
let playerSelection;

// playRound handles a round of gameplay and returns its result
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
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock.";
    
    // if input was note a game choice
    } else {
        return "Your input was not a game choice!"
    }
}

// game() enables five rounds of the game 
function game () {
    // loop through 0-4 to play the game 5x
    for (i = 0; i < 5; i++) {
        if (i === 4){
            do {
                playerSelection = prompt("This is the final round, the ultimate battle. What totem do you choose?");
            } while (!playerSelection);

            let result = playRound(playerSelection, computerSelection);
            console.log(result);
        } else {
            do{
                playerSelection = prompt(`Choose a totem.`);
            } while (!playerSelection);

            let result = playRound(playerSelection, computerSelection);
            console.log(result);
        }
    }
}

// calling game!
game();
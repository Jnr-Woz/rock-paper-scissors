// getComputerChoice() randomly returns "Rock", "Paper", or "Scissors"

function getComputerChoice() {
    let gameChoices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * gameChoices.length);

    return (gameChoices[randomIndex]);
}

let randomChoice = getComputerChoice();
console.log(randomChoice);
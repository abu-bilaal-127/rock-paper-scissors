function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let length = choices.length;
    let computerChoice = choices[randomChoice(length)];
    return computerChoice;
}

function randomChoice(length) {
    return Math.floor(Math.random() * length);
}

// DOM operations
const options = document.querySelector('.options');

options.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            playRound('rock', getComputerChoice());
            break;
        case 'paper':
            playRound('paper', getComputerChoice());
            break;
        case 'scissors':
            playRound('scissors', getComputerChoice());
            break;
    }
});

const result = document.querySelector('.result');

// score board
let playerScore = 0;
let computerScore = 0;

// rock crushes scissors
// paper covers rock
// scissors cuts paper

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playerScore++;
            result.textContent = "You win! Rock crushes Scissors.";
        } else if (computerSelection === "paper") {
            computerScore++;
            result.textContent = "You lose! Paper covers Rock.";
        } else {
            result.textContent = "It is a tie!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            result.textContent = "You win! Paper covers Rock.";
        } else if (computerSelection === "scissors") {
            computerScore++;
            result.textContent = "You lose! Scissors cuts Paper.";
        } else {
            result.textContent = "It is a tie!";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerScore++;
            result.textContent = "You win! Scissors cuts Paper.";
        } else if (computerSelection === "rock") {
            computerScore++;
            result.textContent = "You lose! Rock crushes Scissors.";
        } else {
            result.textContent = "It is a tie!";
        }
    } else {
        result.textContent = "Your choice is not valid :(";
    }
}
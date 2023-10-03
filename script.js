function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let length = choices.length;
    let computerChoice = choices[randomChoice(length)];
    return computerChoice;
}

function randomChoice(length) {
    return Math.floor(Math.random() * length);
}

// let computerSelection = getComputerChoice();
// console.log(computerSelection);

// score board
let playerScore = 0;
let computerScore = 0;

// rock crushes scissors
// paper covers rock
// scissors cuts paper

function playOneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playerScore++;
            return("You win! Rock crushes Scissors.");
        } else if (computerSelection === "paper") {
            computerScore++;
            return("You lose! Paper covers Rock.");
        } else {
            return("It is a tie!");
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            return("You win! Paper covers Rock.");
        } else if (computerSelection === "scissors") {
            computerScore++;
            return("You lose! Scissors cuts Paper.");
        } else {
            return("It is a tie!");
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerScore++;
            return "You win! Scissors cuts Paper.";
        } else if (computerSelection === "rock") {
            computerScore++;
            return "You lose! Rock crushes Scissors.";
        } else {
            return "It is a tie!";
        }
    } else {
        return "Your choice is not valid :(";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        if (i < 4) {
            let playerSelection = prompt(`Round ${i + 1}. What is your choice? (Rock/Paper/Scissors)`);
            let result = playOneRound(playerSelection, getComputerChoice());
            console.log(result);
        } else {
            playerSelection = prompt(`Final round. What is your choice? (Rock/Paper/Scissors)`);
            result = playOneRound(playerSelection, getComputerChoice());
            console.log(result);
            console.log(`Total score:`);
            console.log(`Player: ${playerScore}. Computer: ${computerScore}`);
        }
    }
}

// game test test
game();
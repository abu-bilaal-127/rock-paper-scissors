function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let length = choices.length;
    let computerChoice = choices[randomChoice(length)];
    return computerChoice;
}

function randomChoice(length) {
    return Math.floor(Math.random() * length);
}

let computerSelection = getComputerChoice();
console.log(computerSelection);

// rock crushes scissors
// paper covers rock
// scissors cuts paper

function playOneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return("You win! Rock crushes Scissors.");
        } else if (computerSelection === "paper") {
            return("You lose! Paper covers Rock.");
        } else {
            return("It is a tie!");
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return("You win! Paper covers Rock.");
        } else if (computerSelection === "scissors") {
            return("You lose! Scissors cuts Paper.");
        } else {
            return("It is a tie!");
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You win! Scissors cuts Paper.";
        } else if (computerSelection === "rock") {
            return "You lose! Rock crushes Scissors.";
        } else {
            return "It is a tie!";
        }
    } else {
        return "Your choice is not valid :(";
    }
}

// testing playOneRound
let result = playOneRound("Rock", computerSelection);
console.log(result);
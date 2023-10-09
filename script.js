// generating an option at random for the imaginary opponent
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let length = choices.length;
    let computerChoice = choices[randomChoice(length)];
    return computerChoice;
}

function randomChoice(length) {
    return Math.floor(Math.random() * length);
}

// DOM operations and some more game logic 
const options = document.querySelector('.options');

// handling user selection
options.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            playRound('rock', getComputerChoice());
            scoreBoard();
            break;
        case 'paper':
            playRound('paper', getComputerChoice());
            scoreBoard();
            break;
        case 'scissors':
            playRound('scissors', getComputerChoice());
            scoreBoard();
            break;
    }
});

const result = document.querySelector('.result');
const playerScoreBoard = document.querySelector('.player-score');
const computerScoreBoard = document.querySelector(".computer-score");

// score board
let playerScore = 0;
let computerScore = 0;

function scoreBoard () {
    if (playerScore === 5 && computerScore < 5) {
        result.textContent = "You win this round!";
        console.log(playerScore);
    } else if (computerScore === 5 && playerScore < 5) {
        result.textContent = "You lose this round. The matrix wins!";
        console.log(computerScore);
    }
}

// rock crushes scissors
// paper covers rock
// scissors cuts paper

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            // "You win! Rock crushes Scissors."
            playerScore++;

            playerScoreBoard.textContent = `Score (Player): ${playerScore}`;
            computerScoreBoard.textContent = `Score (Matrix): ${computerScore}`;
        } else if (computerSelection === "paper") {
            // "You lose! Paper covers Rock."
            computerScore++;

            playerScoreBoard.textContent = `Score (Player): ${playerScore}`;
            computerScoreBoard.textContent = `Score (Matrix): ${computerScore}`;
        } else {
            // Tie!
            playerScoreBoard.textContent = `Score (Player): ${playerScore}`;
            computerScoreBoard.textContent = `Score (Matrix): ${computerScore}`;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            // "You win! Paper covers Rock."
            playerScore++;

            playerScoreBoard.textContent = `Score (Player): ${playerScore}`;
            computerScoreBoard.textContent = `Score (Matrix): ${computerScore}`;
        } else if (computerSelection === "scissors") {
            // "You lose! Scissors cuts Paper."
            computerScore++;

            playerScoreBoard.textContent = `Score (Player): ${playerScore}`;
            computerScoreBoard.textContent = `Score (Matrix): ${computerScore}`;
        } else {
            //  Tie
            playerScoreBoard.textContent = `Score (Player): ${playerScore}`;
            computerScoreBoard.textContent = `Score (Matrix): ${computerScore}`;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            // "You win! Scissors cuts Paper."
            playerScore++;

            playerScoreBoard.textContent = `Score (Player): ${playerScore}`;
            computerScoreBoard.textContent = `Score (Matrix): ${computerScore}`;
        } else if (computerSelection === "rock") {
            // "You lose! Rock crushes Scissors."
            computerScore++;

            playerScoreBoard.textContent = `Score (Player): ${playerScore}`;
            computerScoreBoard.textContent = `Score (Matrix): ${computerScore}`;
        } else {
            //  Tie
            playerScoreBoard.textContent = `Score (Player): ${playerScore}`;
            computerScoreBoard.textContent = `Score (Matrix): ${computerScore}`;
        }
    } else {
        result.textContent = "Your choice is not valid :(";
    }
}
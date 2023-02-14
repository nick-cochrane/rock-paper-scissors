function getComputerChoice() {
    let randNumber = Math.floor(Math.random() * 3);
    if (randNumber == 0) {
        return "Rock";
    } else if (randNumber == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    player = playerSelection.toLowerCase();
    computer = computerSelection.toLowerCase();

    if (player == "rock") {
        if (computer == "rock") {
            return "Tie!"
        } else if (computer == "paper") {
            return "You lose! Paper beats Rock!"
        } else {
            return "You win! Rock beats Scissors!"
        }
    } else if (player == "paper") {
        if (computer == "rock") {
            return "You win! Paper beats rock!"
        } else if (computer == "paper") {
            return "Tie!"
        } else {
            return "You lose! Scissors beats paper!"
        }
    } else if (player == "scissors") {
        if (computer == "rock") {
            return "You lose! Rock beats scissors!"
        } else if (computer == "paper") {
            return "You win! Scissors beats paper!"
        } else {
            return "Tie!"
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter rock, paper, or scissors");
        const computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes("win") == true) {
            playerScore++;
        } else if (result.includes("lose") == true) {
            computerScore++;
        } else {
        }
    }

    console.log(`Final Score is player: ${playerScore} to computer: ${computerScore}`);
    (playerScore <= computerScore) ? console.log("You LOSE!!!") : console.log("YOU WIN!!!");
}

game();
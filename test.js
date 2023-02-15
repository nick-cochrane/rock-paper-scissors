let playerScore = 0;
let computerScore = 0;
let playCount = 0;


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
            computerScore+=1;
            return "You lose! Paper beats Rock!"
        } else {
            playerScore+=1;
            return "You win! Rock beats Scissors!"
        }
    } else if (player == "paper") {
        if (computer == "rock") {
            playerScore+=1;
            return "You win! Paper beats rock!"
        } else if (computer == "paper") {
            return "Tie!"
        } else {
            computerScore+=1;
            return "You lose! Scissors beats paper!"
        }
    } else if (player == "scissors") {
        if (computer == "rock") {
            computerScore+=1;
            return "You lose! Rock beats scissors!"
        } else if (computer == "paper") {
            playerScore+=1;
            return "You win! Scissors beats paper!"
        } else {
            return "Tie!"
        }
    }

}

function game() {
    let computerSelection = getComputerChoice();

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {

        button.addEventListener('click', () => {
           playRound(button.id, getComputerChoice());
           playCount+=1;

           const score = document.querySelector('.results');
           score.textContent = (`Current score is player: ${playerScore} to computer: ${computerScore}`);

           if (playerScore == 5 || computerScore == 5) {
            (playerScore <= computerScore) ? score.textContent = "You LOSE!!! Refresh to play again" : score.textContent = "YOU WIN!!! Refresh to play again";
            document.getElementById("button").disabled = true;

           }
        });
    });

}

game();
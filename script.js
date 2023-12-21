let playerScore = 0;
let computerScore = 0;
const resultDisplay = document.querySelector('#resultDisplay');

const rockBut = document.querySelector('#rock');
rockBut.addEventListener('click', () => {
    playRound(rockBut.value, getComputerChoice());
    checkScore();
});

const paperBut = document.querySelector('#paper');
paperBut.addEventListener('click', () => {
    playRound(paperBut.value, getComputerChoice());
    checkScore();
});

const scissorsBut = document.querySelector('#scissors');
scissorsBut.addEventListener('click', () => {
    playRound(scissorsBut.value, getComputerChoice());
    checkScore();
});

function getComputerChoice (){
    let randomNumber;
    let computerChoice;
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0){
        computerChoice = 'Rock';
    } else if (randomNumber === 1){
        computerChoice = 'Paper';
    } else if (randomNumber === 2){
        computerChoice = 'Scissors';
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    resultDisplay.children[0].textContent = "your choice: " + playerSelection + " vs ";
    resultDisplay.children[1].textContent = " computer choice: " + computerSelection;

    if (playerSelection === computerSelection) {
        resultDisplay.children[2].textContent = " It's a tie!";
        resultDisplay.children[3].textContent = "player score: " + playerScore + " computer score: " + computerScore;

        return "tie";
    } else if ((playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Rock" && computerSelection === "Scissors")) {
            resultDisplay.children[2].textContent = ` You Win! ${playerSelection} beats ${computerSelection}`;
            playerScore += 1;
            resultDisplay.children[3].textContent = "player score: " + playerScore + " computer score: " + computerScore;

            return "win";
    } else {
        resultDisplay.children[2].textContent = ` You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScore += 1;
        resultDisplay.children[3].textContent = "player score: " + playerScore + " computer score: " + computerScore;

        return "lose";
    } 
}

function checkScore() {
    let totalRounds = playerScore + computerScore;
    if (totalRounds === 5 && playerScore > computerScore) {
        resultDisplay.children[2].textContent = "YOU ARE THE WINNER!";
        playerScore = 0;
        computerScore = 0;
    }
    if (totalRounds === 5 && computerScore > playerScore) {
        resultDisplay.children[2].textContent = "COMPUTER IS THE WINNER!";
        playerScore = 0;
        computerScore = 0;
    }
}
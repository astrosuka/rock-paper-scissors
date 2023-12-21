
let computerSelection;

const rockBut = document.querySelector('#rock');
rockBut.addEventListener('click', () => {
    computerSelection = getComputerChoice();
    playRound(rockBut.value, computerSelection);
});

const paperBut = document.querySelector('#paper');
paperBut.addEventListener('click', () => {
    computerSelection = getComputerChoice();
    playRound(paperBut.value, computerSelection);
});

const scissorsBut = document.querySelector('#scissors');
scissorsBut.addEventListener('click', () => {
    computerSelection = getComputerChoice();
    playRound(scissorsBut.value, computerSelection);
});

const results = document.querySelector('#results');



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
    // console.log("your choice: " + playerSelection);
    results.textContent = "your choice: " + playerSelection;
    console.log("computer choice: " + computerSelection);
    results.textContent += " computer choice: " + computerSelection;

    
    if (playerSelection === computerSelection) {
        // console.log("it's a tie!");
        results.textContent += " It's a tie!";
        return "tie";
    } else if ((playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Rock" && computerSelection === "Scissors")) {
        // console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        results.textContent += ` You Win! ${playerSelection} beats ${computerSelection}`;
        return "win";
    } else {
        // console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        results.textContent += ` You Lose! ${computerSelection} beats ${playerSelection}`;
        return "lose";
    } 
}

// function game(){

//     let playerScore = 0;
//     let computerScore = 0;
 
//     for (i = 0; i < 5;){
//         console.log("round "+ (i + 1));
//         let computerSelection = getComputerChoice();
//         let playerSelection = prompt("round " + (i + 1));
//         let result = playRound(playerSelection, computerSelection);

//         if (result === "win") {
//             playerScore += 1;
//             i += 1;
//         } else
//         if (result === "lose"){
//             computerScore += 1;
//             i += 1;
//         }

//         if (i == 5) {
//             alert("your score: " + playerScore + '. computer score: ' + computerScore)
//         }
//     }
// }

// game();


// let playerSelection = 'rock';
// playRound(playerSelection, computerSelection);
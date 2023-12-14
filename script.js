//randomly return 'Rock', 'Paper' or 'Scissors'
function getComputerChoice (){
    let randomNumber;
    let computerChoice;
    //generate random number from 0 to 100
    randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber <= 33){
        computerChoice = 'Rock';
    } else if (randomNumber > 33 && randomNumber < 67) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }
    return computerChoice;
}

//function that plays a single round, should take 2  parameters: playerSelection and computerSelection.
// function playRound(playerSelection, computerSelection) {
//     //make playerSelection case insensitive
//     playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
//     console.log("your choice: " + playerSelection);
//     console.log("computer choice: " + computerSelection);
//     //
//     if (playerSelection === "Rock" && computerSelection === "Paper"){
//         return "You Lose! Paper beats Rock";
//     } else 
//     if (playerSelection === "Scissors" && computerSelection === "Paper"){
//         return "You Win! Scissors beats Paper";
//     } else
//     if (playerSelection === "Scissors" && computerSelection === "Rock"){
//         return "You Lose! Rock beats Scissors";
//     } else
//     if (playerSelection === "Paper" && computerSelection === "Rock"){
//         return "You Win! Paper beats Rock";
//         } else
//     if (playerSelection === "Rock" && computerSelection === "Scissors"){
//         return "You Win! Rock beats Scissors";
//     } else
//     if (playerSelection === "Paper" && computerSelection === "Scissors"){
//         return "You Lose! Scissors beats Paper";
//     } else 
//     if (playerSelection === computerSelection) {
//         return "it's a tie!"
//     } else {
//         return "huh?";
//     }

// }

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    console.log("your choice: " + playerSelection);
    console.log("computer choice: " + computerSelection);

    if (playerSelection === computerSelection) {
        console.log("it's a tie!");
        return "tie";
    } else if ((playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Rock" && computerSelection === "Scissors")) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return "win";
    } else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return "lose";
    } 
}

//create game funciton
function game(){

    let playerScore = 0;
    let computerScore = 0;
 
    for (i = 0; i < 5;){
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("round " + (i + 1));
        let result = playRound(playerSelection, computerSelection);

        if (result === "win") {
            console.log(result);
            playerScore += 1;
            i += 1;

        } else
        if (result === "lose"){
            console.log(result);
            computerScore += 1;
            i += 1;
        } 
        else {
            console.log(result);
        }

        if (i == 4) {
            alert("your score: " + playerScore + '. computer score: ' + computerScore)
        }
    }

}

game();
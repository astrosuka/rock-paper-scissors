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
function playRound(playerSelection, computerSelection) {
    //make playerSelection case insensitive
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    console.log(playerSelection);
    //
    if (playerSelection === "Rock" && computerSelection === "Paper"){
        return "You Lose! Paper beats Rock";
    } else 
    if (playerSelection === "Scissors" && computerSelection === "Paper"){
        return "You win! Scissors beats Paper";
    } else
    if (playerSelection === "Scissors" && computerSelection === "Rock"){
        return "You Lose! Rock beats Scissors";
    } else
    if (playerSelection === "Paper" && computerSelection === "Rock"){
        return "You Win! Paper beats Rock";
        } else
    if (playerSelection === "Rock" && computerSelection === "Scissors"){
        return "You Win! Rock beats Scissors";
    } else
    if (playerSelection === "Paper" && computerSelection === "Scissors"){
        return "You Lose! Scissors beats Paper";
    } else 
    if (playerSelection === computerSelection) {
        return "it's a tie!"
    } else {
        return "something went wrong";
    }

}

//create game funciton
function game(){
    
}


const playerSelection = "ROCK";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
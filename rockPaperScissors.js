// first make a fucntion called getComputerChoice

function getComputerChoice() {
    computerChoice = " "
    var randomChoice = Math.floor(Math.random()*3);
    if (randomChoice === 0) {
        computerChoice = "rock";
    } else if (randomChoice === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    console.log(`The computer chose ${computerChoice}!`);
    return computerChoice;
}

//Write a function that plays a single round
//Two parameters, playerSelection, computerSelection
//Return a string that declares the winner and why
//playerSelection parameter will be case insensitive

function playRound(playerSelection, computerSelection) {
    returnString = " "
    if (playerSelection === computerSelection) {
        returnString = "It is a tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        returnString = "You win! Rock beats scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        returnString = "You win! Scissors beats paper!";
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        returnString = "You win! Paper beats rock!";
    } else {
        returnString = "You lose!";
    } 
    return returnString;
    console.log(returnString);
}



//Make a function called game() that calls playRound()
//play 5 games with a for loop
//console.log the winner
//prompt() to get input from user


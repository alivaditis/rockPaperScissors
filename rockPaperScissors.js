// first make a fucntion called getComputerChoice

function getComputerChoice() {
    computerChoice = ""
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
    
    if (playerSelection === computerSelection) {
        return "It is a tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats paper!";
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You win! Paper beats rock!";
    } else {
        return "You lose!";
    } 
}


//Make a function called game() that calls playRound()
//play 5 games with a for loop
//console.log the winner
//prompt() to get input from user


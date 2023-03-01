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
}

//Write a function that plays a single round
//Two parameters, playerSelection, computerSelection
//Return a string that declares the winner and why
//playerSelection parameter will be case insensitive

//Make a function called game() that calls playRound()
//play 5 games with a for loop
//console.log the winner
//prompt() to get input from user


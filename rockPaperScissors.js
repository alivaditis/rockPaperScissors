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
    console.log(`The computer chooses ${computerChoice}!`);
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
        return "You win this round! Rock beats scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win this round! Scissors beats paper!";
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You win this round! Paper beats rock!";
    } else {
        return "You lose this round!";
    } 
}


//Make a function called game() that calls playRound()
//play 5 games with a for loop
//console.log the winner
//prompt() to get input from user

playerScore = 0;
computerScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        playerAnswer = prompt("Choose rock, paper, or scissors!").toLowerCase();
        while (playerAnswer !== "rock" && playerAnswer !== "paper" && playerAnswer !== "scissors") {
            console.log("Invalid choice!");
            playerAnswer = prompt("Choose rock, paper, or scissors!").toLowerCase();    
        }
        console.log(`You choose ${playerAnswer}!`);
        let result = playRound(playerAnswer, getComputerChoice());
        console.log(result);
        if (result.includes('win')) {
            playerScore++;
        }
        else if (result.includes('lose')) {
            computerScore++
        }
        console.log(`Round: ${i + 1} Player Score: ${playerScore} Computer Score: ${computerScore}`);
     }
    if (playerScore > computerScore) {
        console.log("You win the game!")
    } else if (computerScore > playerScore) {
        console.log("You lose the game!")
    } else {
        console.log("It is a tie!")
    }
}


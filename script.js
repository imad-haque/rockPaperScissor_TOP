function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 100); 

    if (computerChoice <= 25){
        console.log("Computer Choice : Rock");
    } else if(computerChoice <= 65){
        console.log("Computer Choice : Paper");
    } else if (computerChoice <= 100){
        console.log("Computer Choice: Scissors");
    } 
}

function getHumanChoice(){
    let humanChoice = prompt("Choose your option: (ROCK, PAPER, SCISSORS)");

    if(humanChoice = "rock"){
        console.log("Your Choice: Rock");
    } else if (humanChoice = "paper"){
        console.log("Your Choice: Paper");
    } else if (humanChoice = "scissors"){
        console.log("Your Choice: Scissors");
    } else {
        console.log("Invalid Choice");
    }
}

let humanScore = 0;
let computerScore = 0;

function 
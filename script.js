function getComputerChoice(){
    let computerSelection = Math.floor(Math.random() * 100);

    if (computerSelection <= 25){
        console.log("Computer's Chooses Rock!");
        return "rock";
    } else if(computerSelection <= 50){
        console.log("Computer Chooses Paper!");
        return "paper";
    } else if(computerSelection <= 75){
        console.log("Computer Chooses Scissors!");
        return "scissors";
    } 
}
function getHumanChoice(){
    let humanSelection = prompt("Choose rock, paper or scissors!");
    if(humanSelection === "rock"){
        console.log("Human Chooses Rock!");
    } else if (humanSelection === "paper"){
        console.log("Human chooses paper!");
    } else if(humanSelection === "scissors"){
        console.log("Human Chooses Scissors!");
    } else {
        console.error("Invalid Choice Mate");
    }
    return humanSelection.toLowerCase();
}

let humanScore = 0;
let ComputerScore = 0;

function playRound(humanChoice, computerChoice){
  if (humanChoice === computerChoice) {
    console.log("Its a Tie!!");
  } else if((humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper")) {
    console.log("Human Wins!");
    humanScore++;
  } else {
    console.log("Computer Wins!");
    ComputerScore++;
  }
}



function playGame(){
    for (let i = 0; i < 5; i++){
       
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
}

if (humanScore > ComputerScore){
    console.log(`Human wins ${humanScore} : ${ComputerScore}`);
} else if (humanScore < ComputerScore){
    console.log(`Computer Wins ${ComputerScore} : ${humanScore}`);
} else {
    console.log("Nobody Wins");
}
}

playGame();


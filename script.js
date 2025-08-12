    function getComputerChoice(){
        let computerChoice = Math.floor(Math.random() * 100); 

        if (computerChoice <= 25){
            computerChoice = "rock";
            console.log("Computer Choice : Rock");
        } else if(computerChoice <= 65){
            computerChoice = "paper";
            console.log("Computer Choice : Paper");
        } else if (computerChoice <= 100){
            computerChoice = "scissors";
            console.log("Computer Choice: Scissors");
        } 
        return computerChoice;

    }

    function getHumanChoice(){
        let humanChoice =  prompt("Choose your option: (ROCK, PAPER, SCISSORS)");
        console.log(prompt);
        if(humanChoice === "rock"){
            console.log("Your Choice: Rock");
        } else if (humanChoice === "paper"){  
            console.log("Your Choice: Paper");
        } else if (humanChoice === "scissors"){
            console.log("Your Choice: Scissors");
        } else {
            console.log("Invalid Choice");
        }
        return humanChoice;
    }

    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice){
        if (humanChoice === "rock" && computerChoice === "scissors"){
            console.log("Human Wins, Rock Beats Scissors L Computer!!!");
            humanScore++;
        }
            else if(humanChoice === "scissors" && computerChoice === "paper"){
                console.log("Human Wins, Scissors Beats Paper L Computer!!!");
                humanScore++;
            } else if (humanChoice === "paper" && computerChoice === "rock"){
                console.log("Human Wins, Paper Beats Rock L Computer!!!");
                humanScore++;
            } else if (humanChoice === "rock" && computerChoice === "paper"){
                console.log("Computer Wins, Paper Beats Rock L Human!!!");
                computerScore++;
            } else if(humanChoice === "paper" && computerChoice === "scissors"){
                console.log("Computer Wins, scissors Beats paper L Human!!!");
                computerScore++;
            } else if(humanChoice === "scissors" && computerChoice === "rock"){
                console.log("Computer Wins, Rock Beats Scissors L Human!!!");
                computerScore++;
            } else if(humanChoice === computerChoice){
                console.log("Draw");
            }
        }

    function playGame(){
        for (let i = 0; i < 5; i++){
            let humanChoice = getHumanChoice();
            let computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        }
        if (humanScore > computerScore){
            console.log("Human Wins. Human's Score is " + humanScore + "to Computer's " + computerScore);
        } else if(humanScore < computerScore){
            console.log("Computer Wins. Computer's score is " + computerScore + "to Human's " + humanScore );
        } else if (humanScore === computerScore){
            console.log("Nobody wins L Bozos.");
        }
    }

    playGame();


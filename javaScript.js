


function getComputerChoice(){
    let random = Math.floor(Math.random()*(3)+1);
    switch(random){
        case 1:
            return "rock";
            break;

        case 2:
            return "paper";
            break;

        case 3:
            return "scissors";
            break;
    }
}


function getHumanChoice(){
    let humanChoice = prompt("Chose one, (rock, paper, scissors): ");
    humanChoice = humanChoice.toLocaleLowerCase();
    return humanChoice; 
}




function playGame(){
    let humanSelection;
let computerSelection;

    let humanScore = 0; 
    let computerScore = 0; 
        for(let i = 0; i<=4; i++){
         humanSelection = getHumanChoice();
         computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`HumanScore:${humanScore}, ComputerScore:${computerScore}`)
    }

    let gameWinner = function(){
        if (humanScore > computerScore){
            return "Game winner is human!";
        }

        else if(humanScore === computerScore){
            return "It is a tie, no game winner!";
        }

        else{
            return "Game winner is computer!";
        }
    }

    console.log(gameWinner());

    


    function playRound(humanChoice,computerChoice){
        console.log(`Human:${humanChoice}, Computer:${computerChoice}`);

        switch(true){

            case humanChoice == computerChoice:
                console.log("Its a tie!")
                break;
            case humanChoice === "rock" && computerChoice === "scissors":
                console.log(`Human wins! ${humanChoice} beats ${computerChoice}`);
                humanScore++; 
                break;

            case humanChoice === "paper" && computerChoice === "rock":
                console.log(`Human wins! ${humanChoice} beats ${computerChoice}`);
                humanScore++; 
                break; 

            case humanChoice === "scissors" && computerChoice === "paper":
                console.log(`Human wins! ${humanChoice} beats ${computerChoice}`);
                humanScore++
                break;

            default:
                console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
                computerScore++;
                break;
        }

    }

}




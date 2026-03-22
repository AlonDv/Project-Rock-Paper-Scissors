let humanScore  = 0; 
let computerScore = 0; 




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
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice,computerChoice){
    console.log(`Human:${humanChoice}, Computer:${computerChoice}`);

    switch(true){

        case humanChoice == computerChoice:
            console.log("Its a tie!")
            break;
        case humanChoice === "rock" && computerChoice === "scissors":
            console.log("Human wins!")
            humanScore++; 
            break;

        case humanChoice === "paper" && computerChoice === "rock":
            console.log("Human wins!")
            humanScore++; 
            break; 

        case humanChoice === "scissors" && computerChoice === "paper":
            console.log("Human wins!")
            humanScore++
            break;

        default:
            console.log("Computer wins!")
            computerScore++;
            break;
    }

}

playRound(humanSelection, computerSelection);




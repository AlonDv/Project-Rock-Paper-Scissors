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


console.log(getHumanChoice());






    function getComputerChoice(){
        let random = Math.floor(Math.random()*(3)+1);
        switch(random){
            case 1:
                return "rock";
                

            case 2:
                return "paper";
                

            case 3:
                return "scissors";
                
        }
    }





    function playGame(){
        function eventHandler(event){
        if(event.target.tagName === "IMG"){
                humanSelection = (event.target.parentElement.id);
                computerSelection = getComputerChoice();
                playRound(humanSelection,computerSelection);
                pScoreText.textContent = humanScore;
                cScoreText.textContent = computerScore;
            }

            if(computerScore  == 5 || humanScore == 5 ){
                message.textContent = gameWinner();
                container.removeEventListener("click",eventHandler);
            }
        }
        let humanSelection;
        let computerSelection;

        let humanScore = 0; 
        let computerScore = 0; 
        const reset = document.querySelector(".reset");
        const pScoreText = document.querySelector(".pScoreText");
        const cScoreText = document.querySelector(".cScoreText");
        const container = document.querySelector(".container");
        const message = document.querySelector(".message");
        container.addEventListener("click", eventHandler);

        reset.addEventListener("click",()=>{
            console.log("reset");
            humanScore = 0; 
            computerScore = 0; 
            pScoreText.textContent = humanScore; 
            cScoreText.textContent = computerScore;   
            container.removeEventListener("click",eventHandler);
            container.addEventListener("click",eventHandler);
        });
    
        
        //     for(let i = 0; i<=4; i++){
        //      humanSelection = getHumanChoice();
        //      computerSelection = getComputerChoice();
        //     playRound(humanSelection, computerSelection);
        //     console.log(`HumanScore:${humanScore}, ComputerScore:${computerScore}`)
        // }

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

        // console.log(gameWinner());

        


        function playRound(humanChoice,computerChoice){
            message.textContent = `Human:${humanChoice}, Computer:${computerChoice}`;

            switch(true){

                case humanChoice == computerChoice:
                    message.textContent = "Its a tie!";
                    break;
                case humanChoice === "rock" && computerChoice === "scissors":
                    message.textContent = `Human wins! ${humanChoice} beats ${computerChoice}`;
                    humanScore++; 
                    break;

                case humanChoice === "paper" && computerChoice === "rock":
                    message.textContent = `Human wins! ${humanChoice} beats ${computerChoice}`;
                    humanScore++; 
                    break; 

                case humanChoice === "scissors" && computerChoice === "paper":
                    message.textContent = `Human wins! ${humanChoice} beats ${computerChoice}`;
                    humanScore++
                    break;

                default:
                    message.textContent = `Computer wins! ${computerChoice} beats ${humanChoice}`;
                    computerScore++;
                    break;
            }


        }

    }



    playGame();

    const DEFEATED = {
        rock: "paper",
        paper: "scissors",
        scissors: "rock"
    };

    const WON = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    function capitalize(string) {
        let lowerCaseString = string.toLowerCase();
        let capitalizedLetter = lowerCaseString.charAt(0).toUpperCase();
        let finishedString = lowerCaseString.replace(lowerCaseString.charAt(0),capitalizedLetter)
        return finishedString;
    }

    function computerSelect() {
        randomNumber = Math.random()*15; //random Number between 0 and 15
        return (randomNumber<=5) ? 'rock' : (randomNumber<=10) ? 'paper' : 'scissors';
    }

    function playRound(playerSelection) {
        let computerSelection = computerSelect();

        //Output Selections
        document.querySelector('#playerselection').textContent = `${capitalize(playerSelection)}`;
        document.querySelector('#computerselection').textContent = `${capitalize(computerSelection)}`;

        //find the Winner
        if (DEFEATED[playerSelection] == computerSelection) {
            //player loses
             document.querySelector('#output').textContent = capitalize(playerSelection) + " is inferior to " + capitalize(computerSelection) + ". You lose this round.";
            computerScore++;
        }
        else if (WON[playerSelection] == computerSelection){
            //player wins
            document.querySelector('#output').textContent = capitalize(playerSelection) + " beats " + capitalize(computerSelection) + ". You win this round.";
            playerScore++;
        }
        else if (playerSelection == computerSelection) {
            document.querySelector('#output').textContent = "Tie! You both chose the same item. Choose again!";

        }
        else {
            //error
            document.querySelector('#output').textContent = "Something went wrong.";
        }

        //output score
        document.querySelector("#playerscore").textContent = `${playerScore}`;
        document.querySelector("#computerscore").textContent = `${computerScore}`;

        //end the game when one has 5 points
        if (playerScore>=5) {
            //end game
            document.querySelector('#output').textContent = "Congratulations! You won the game" + playerScore + " : " + computerScore + "! Click \"Restart \" to start a new game.";
            reset();

        }
        else if (computerScore>=5) {
            document.querySelector('#output').textContent = "You lost the game " + playerScore + " : " + computerScore + "! Click \"Restart \" to start a new game.";
            reset();
        }
        else {return;}

        return;
    }

    function reset() {
        //set score 0
        computerScore = 0;
        playerScore = 0;
        document.querySelector("#playerscore").textContent = `${playerScore}`;
        document.querySelector("#computerscore").textContent = `${computerScore}`;
        const buttons = document.querySelectorAll('.button');
        buttons.forEach((button) => {
            button.disabled = true;
        });

    }

    function restart() {
        const buttons = document.querySelectorAll('.button');
        buttons.forEach((button) => {
            button.disabled = false;
        });

    }

    let computerScore = 0;
    let playerScore = 0;

    //start the game by clicking
    const buttons = document.querySelectorAll('.button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
        playRound(button.id)
        });
    });

    const restartButton = document.getElementById("restart");
    restartButton.addEventListener('click', () => {
        restart();
        });
const getPlayerChoice = (playerChoice) => {
    playerChoice = prompt("Type rock, paper, or scissors");
    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        return playerChoice;
    }
    else {
        return 'Invalid Option';
    }
}

const getComputerChoice = (computerChoice) => {
    computerChoice = Math.floor(Math.random() * 3);

    switch(computerChoice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

const determineWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        return 'Tie!';
    }
    else if (playerChoice === 'rock' && computerChoice === 'scissors')
    {
        return 'You Win!';
    }
    else if (playerChoice === 'paper' && computerChoice === 'rock')
    {
        return 'You Win!';
    }
    else if (playerChoice === 'scissors' && computerChoice === 'paper')
    {
        return 'You Win!';
    }
    else {
        return 'Computer Wins!';
    }
}

const playGame = () => {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    console.log('You threw ' + playerChoice);
    console.log('Computer threw ' + computerChoice);
    console.log(determineWinner(playerChoice, computerChoice));
}

playGame();
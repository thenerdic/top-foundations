const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
let gameResult = document.querySelector('.game-result');
let playerScore = 0;
let compScore = 0;
let playerChoice;


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

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
       gameResult.textContent = "It's a tie!";
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors')
    {
        playerScore++;
        gameResult.textContent = "You win this round!";
        document.querySelector('.playerScore').textContent = playerScore;
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock')
    {
        playerScore++;
        gameResult.textContent = "You win this round!";
        document.querySelector('.playerScore').textContent = playerScore;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper')
    {
        playerScore++;
        gameResult.textContent = "You win this round!";
        document.querySelector('.playerScore').textContent = playerScore;
    }
    else {
        compScore++;
        gameResult.textContent = "Computer wins this round!";
        document.querySelector('.compScore').textContent = compScore;
    }
}

const game = (playerChoice) => {
    let player = playerChoice;
    let computer = getComputerChoice();

    playRound(player, computer);

    if (playerScore === 5) {
        gameResult.textContent = "YOU WON!"
    }
    else if (compScore === 5)
    {
        gameResult.textContent = "YOU LOST TO A COMPUTER!";
    }
}

/* event listeners */
rockBtn.addEventListener('click', () => {
    game("rock");
});

paperBtn.addEventListener('click', () => {
    game("paper");
});

scissorsBtn.addEventListener('click', () => {
    game("scissors");
});

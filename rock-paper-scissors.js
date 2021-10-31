//running the rps button functionality
const btn = document.querySelectorAll('button');
let playerRoundsWon = 0;
let computerRoundsWon = 0;
const body = document.querySelector('body');
const roundResults = document.createElement('div');
const scoreKeeperDiv = document.createElement('div');
roundResults.classList.add('rounds-text');
scoreKeeperDiv.classList.add('rounds-text');

body.appendChild(roundResults);
body.appendChild(scoreKeeperDiv);

btn.forEach((button) => {
        button.addEventListener('click', () => {
            if(playerRoundsWon < 5 && computerRoundsWon < 5){
                if (button.id == 'rock'){
                    roundResults.innerText = playRound ('rock',computerPlay());
                }
                else if (button.id == 'paper')
                {
                    roundResults.innerText = playRound ('paper',computerPlay());
                }
                else
                {
                    roundResults.innerText = playRound ('scissors',computerPlay());
                }
                if(playerRoundsWon == 5 || computerRoundsWon == 5)
                {
                    if(playerRoundsWon == 5)
                    {
                        scoreKeeperDiv.innerText = 'Good Game! You saved the world!'
                        scoreKeeperDiv.style.cssText = 'color:yellowgreen';
                    }
                    else
                    {
                        scoreKeeperDiv.innerText = 'The World is Destroyed and Run by Computers. Good Bye.'
                        scoreKeeperDiv.style.cssText = 'color:red';
                    }
                }
            }
        });
  });

function computerPlay()
{
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber == 1)
        return 'rock';
    else if(randomNumber == 2)
        return 'paper';
    
    return 'scissors';
}

function playRound (playerSelection, computerSelection)
{
    //convert all the text to lowercase so it's not case-sensitive
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    if(playerSelection == computerSelection)
    {
        updateScoreboard();
        return 'Tie game';
    }
    else if(playerSelection == 'rock')
    {
        if(computerSelection == 'paper')
        {
            computerRoundsWon++;
            updateScoreboard();
            return 'You lose: Paper beats Rock';
        }
        else
        {
            playerRoundsWon++;
            updateScoreboard();
            return 'You win: Rock beats scissors';
        }
    }
    else if(playerSelection == 'scissors')
    {
        if(computerSelection == 'paper')
        {
            playerRoundsWon++;
            updateScoreboard();
            return 'You win: Scissors beats paper';
        }
        else
        {
            computerRoundsWon++;
            updateScoreboard();
            return 'You lose: Rock beats scissors';
        }  
    }
    else if(playerSelection == 'paper')
    {
        if(computerSelection == 'rock')
        {
            playerRoundsWon++;
            updateScoreboard();
            return 'You win: Paper beats rock';
        }
        else
        {
            computerRoundsWon++;
            updateScoreboard();
            return 'You lose: Scissors beats paper';
        }  
    }

    //random placeholder
    return '';
}

function updateScoreboard()
{
    scoreKeeperDiv.innerText = `Computer ${computerRoundsWon}, Player ${playerRoundsWon}`
}
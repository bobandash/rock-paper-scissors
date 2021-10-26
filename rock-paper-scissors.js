const btn = querySelectorAll('button')

function getPlayerSelection() {
    if(this.id == 'rock')
    {
        return 'rock';
    }
    else if(this.id == 'paper')
    {
        return 'paper';
    }

    return 'scissors';
}


const rockButton = querySelector('#rock');
const paperButton = querySelector('#paper');
const scissorsButton = querySelector('#scissors');

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
        return 'Tie game';
    }
    else if(playerSelection == 'rock')
    {
        if(computerSelection == 'paper')
            return 'You lose: Paper beats Rock';
        else
            return 'You win: Rock beats scissors';
    }
    else if(playerSelection == 'scissors')
    {
        if(computerSelection == 'paper')
            return 'You win: Scissors beats paper';
        else
            return 'You lose: Rock beats scissors';       
    }

    //random placeholder
    return '';
}

//the case is the computer wins or you win, or it's a tie
function game()
{
    playerSelection = 'rock';
    //let playerSelection = prompt('Rock, Paper, or Scissors');
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);

}
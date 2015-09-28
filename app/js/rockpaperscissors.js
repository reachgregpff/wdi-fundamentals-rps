////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    //return /* Your Expression */;
	return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    //return /* Your Expression */;
	return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    
    //If player move is rock
    if(playerMove === 'rock'){
    	if(computerMove === 'rock') 
    		winner = 'tie';
    	else if(computerMove === 'paper') 
    		winner = 'computer';
    		else if(computerMove === 'scissors') 
    			winner = 'player';
    }
    
  //If player move is paper
    if(playerMove === 'paper'){
    	if(computerMove === 'rock') 
    		winner = 'player';
    	else if(computerMove === 'paper') 
    		winner = 'tie';
    		else if(computerMove === 'scissors') 
    			winner = 'computer';
    }
    
  //If player move is scissors
    if(playerMove === 'scissors'){
    	if(computerMove === 'rock') 
    		winner = 'computer';
    	else if(computerMove === 'paper') 
    		winner = 'player';
    		else if(computerMove === 'scissors') 
    			winner = 'tie';  //do we need to check any other values for playerMove?
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    
    var playerMove = ' '; //initialise playerMove
    var computerMove = ' '; //initialise computerMove
    
    while(true) {
    	
    	playerMove = getPlayerMove();
    	computerMove = getComputerMove();
    	
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    
    	switch (getWinner(playerMove, computerMove)){
    		case 'player': playerWins++; break;
    		case 'computer': computerWins++; break;
    		case 'tie':  break;
    	}
    	
    	console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');

    	// This function should continue to play Rock Paper Scissors until either the
    	// player or the computer has won five times. Break when either has won 5 times

    	if(playerWins === 5 || computerWins === 5)
    		break;
    }
    
    return [playerWins, computerWins];
}


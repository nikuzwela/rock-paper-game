function computerTurn(){
    const options = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
  }
  
  function playRound(playerSelection,computerSelection){
  playerSelection = playerSelection.toLowerCase();
  
  if(playerSelection === computerSelection.toLowerCase()){
    return "it's a tie";
  }
  else if((computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'paper') ||(computerSelection === 'paper' && playerSelection === 'rock')){
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
  else {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  }
  }
  function game(){
  let playerRate = 0;
  let computerRate = 0;
  for(let round = 1; round <= 5; round++){
  const computerSelection = computerTurn();
  const playerSelection = prompt('Enter your choice(rock/paper/scissors):');
  const result = playRound(playerSelection,computerSelection);
  console.log(`Round ${round} : ${result}`);
  
  if (result.includes('Win')){
  playerRate++;
  }
  else if(result.startsWith('You lose!')){
    computerRate++;
  }
  }
  if(computerRate < playerRate){
    console.log('You win the game!');
  }
  else if(computerRate > playerRate){
    console.log('You lose the game!');
  }
  else{
    console.log("It's a tie game!");
  }
  }
  game();
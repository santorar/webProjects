/* 
  Rock, Paper, Scissors
  This program needs to be a rock, paper, Scissors game, this game is going to be played completely form the console
  The user needs to choice and the computer will make a choice randomly
  Make a function that plays a single round of Rock Paper Scissors. the function should take two parameters, the player Selection and the computerSelection
  And then return a string that declares the winner of the round
  (the user input needs to be case insensitive)
*/
let pointsP = 0;
let pointsC = 0;
let win = false;
// declare a function to get the computer choice
const getComputerChoice = () => {
  // first generate a random number between one and three
  let choice = Math.trunc(Math.random() * 3) + 1;
  // if choice is equal to 1 then the computer choice will be rock
  if (choice === 1) return 'rock'
  // if choice is equal to 2 then the computer choice will be paper
  else if (choice === 2) return 'paper'
  // if choice is equal to 3 then the computer choice will be scissors
  else return 'scissors'
}
const changeCpuChoice = (choice) => {
  const imgCpu = document.querySelector('.cpu-choice .rps-img');
  const textCpu = document.querySelector('.cpu-choice .rps-text');
  switch (choice) {
    case 'rock':
      imgCpu.src = 'assets/rock.png';
      textCpu.textContent = 'ROCK';
      break;
    case 'paper':
      imgCpu.src = 'assets/paper.png';
      textCpu.textContent = 'PAPER';
      break;
    case 'scissors':
      imgCpu.src = 'assets/scissors.png';
      textCpu.textContent = 'SCISSORS';
      break;
    default:
      break;
  }
}
// function that compare the player and the computer choice and return the winner
function rpsRound(playerChoice, computerChoice) {
  // checks if the choices are equal and return that it's a tie
  console.log("player chose: " + playerChoice)
  console.log("computer chose: " + computerChoice)
  if (playerChoice == computerChoice) return 0
  // checks if the player wins
  if (playerChoice == 'rock' && computerChoice == 'scissors')
    return 1
  if (playerChoice == 'paper' && computerChoice == 'rock') 
    return 1
  if (playerChoice == 'scissors' && computerChoice == 'paper')
    return 1
  // checks if the computer Wins
  if (computerChoice == 'rock' && playerChoice == 'scissors')
    return 2
  if (computerChoice == 'paper' && playerChoice == 'rock')
    return 2
  if (computerChoice == 'scissors' && playerChoice == 'paper')
    return 2
}
const changeScores = (winner) => {
  switch (winner) {
    case 1:
      let playerScore = document.querySelector('.player-p');
      pointsP++;
      playerScore.textContent = pointsP;
      break;
    case 2:
      let cpuScore = document.querySelector('.cpu-p');
      pointsC++;
      cpuScore.textContent = pointsC;
      break;
    default:
      break;
  }
}
const changeStatus = (winner, button) => {
  let cpu = document.querySelector('.cpu-choice')
  switch (winner) {
    case 1:
      button.classList.add('win');
      cpu.classList.add('lose');
      break;
    case 2:
      button.classList.add('lose');
      cpu.classList.add('win');
      break;
    case 0:
      button.classList.add('tie');
      cpu.classList.add('tie');
    default:
      break;
  }
}
const checkWinner = () => {
  let winner = "";
  if (pointsP >= 5){
    winner = "player";
    win = true;
  }
  if (pointsC >= 5){
    winner = "cpu";
    win = true;
  }
  if(win){
    let divWin = 
    `<div class="win-screen">
      <span class="win-text">The winner is ${winner}</span>
      <button class="play-again">Play Again</button>
    </div>`;
    let page = document.querySelector('body');
    page.innerHTML += divWin;
    let bPlay = document.querySelector('.play-again');
    bPlay.addEventListener('click',() =>{
      location.reload();
    });

  }
}
const getPlayerChoice = (e) => {
  let button = e.target;
  if(!button) return;
  let selection = button.classList[1];
  let computerChoice = getComputerChoice();
  let winner = rpsRound(selection,computerChoice);
  changeCpuChoice(computerChoice);
  changeScores(winner);
  changeStatus(winner, button);
  checkWinner();
}
const removeWL = (e) => {
    const classList = e.target.classList;
    const cpuC = document.querySelector('.cpu-choice');
    const classList1 = cpuC.classList;
    if (classList.contains('win')) classList.remove('win');
    if (classList.contains('lose')) classList.remove('lose');
    if (classList.contains('tie')) classList.remove('tie');
    if (classList1.contains('win')) classList1.remove('win');
    if (classList1.contains('lose')) classList1.remove('lose');
    if (classList1.contains('tie')) classList1.remove('tie');
}
//calls the actual game
const playerChoices = document.querySelectorAll('.player-choices>.choice');
playerChoices.forEach(choice => {
  choice.addEventListener('transitionend', removeWL);
  choice.addEventListener('click', getPlayerChoice);
});

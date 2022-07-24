'use strict';

/* 
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').value = secretNumber;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number⛔!';
  }
  //When guess is too high
  else if (guess > secretNumber) {
    if (score === 1) {
      document.querySelector('.message').textContent = '❌ YOU LOST THE GAME!';
      document.querySelector('.score').textContent = 0;
    } else {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  // When guess is too low
  else if (guess < secretNumber) {
    if (score === 1) {
      document.querySelector('.message').textContent = '❌ YOU LOST THE GAME!';
      document.querySelector('.score').textContent = 0;
    } else {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  //When player wins
  else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').textContent = '🎈 Correct number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.check').disabled = true;
    document.querySelector('.highscore').textContent = score;
  }
});

////////////////////////////////////////////////////////////
// Coding Challange #1
/*
Implement a game rest functionality, so that the player can 
make a new guess! Here is how:

1.Select the element with the 'again' class and attach a click 
event handler 
2.In the handler function, restore initial values of the score 
and number variables 
3.Restore the initial conditions of the message, number, score 
and guess input field 
4.Also restore the original background color (#222) and number 
width (15rem)
*/

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.check').disabled = false;
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = '🏁 Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});

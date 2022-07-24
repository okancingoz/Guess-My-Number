'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').value = secretNumber;
let score = 20;
let highScore = 0;
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
     if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

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

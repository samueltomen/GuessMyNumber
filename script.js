'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number 🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;


document.querySelector('.guess').value = 14;
console.log(document.querySelector('.guess').value);
 */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //   When there is no input
  if (!guess) {
    displayMessage('⛔ No Number');
    document.querySelector('body').style.backgroundColor = '#FF0000';

    // When the player wins
  } else if (guess === secretNumber) {
    displayMessage('👏 Bravo');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? '↗ Too high' : '↘ Too Low')
    document.querySelector('body').style.backgroundColor = '#222'
    // document.querySelector('.message').textContent =
    //   guess > secretNumber ? '↗ Too high' : '↘ Too Low';
    score--;
    document.querySelector('.score').textContent = score;
  }else{
    displayMessage('💣 You lost the game');
    document.querySelector('.score').textContent = 0;
  }
});

//Wher guess is wrong

// When guess is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '↗ Too high';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💣 You lost the game';
//       document.querySelector('.score').textContent = 0;
//     }

//     // When guess it too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '↘ Too Low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💣 You lost the game';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing ...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});

'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number..!';
document.querySelector('.score').textContent = '10';
document.querySelector('.highscore').textContent = '10';
document.querySelector('.guess').value = '10';
document.querySelector('.number').textContent = '10';
*/
function displaymessage(message) {
  document.querySelector('.message').textContent = message;
}
let fhighscore = 0;
let hidden = Math.trunc(Math.random() * 20 + 1);
let scorevalue = Number(document.querySelector('.score').textContent);
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (guess !== hidden) {
    if (scorevalue > 0) {
      displaymessage(guess < hidden ? 'Too low..!' : 'Too High..!');
      // document.querySelector('.message').textContent = 'Too low..!';
      scorevalue--;
      document.querySelector('.score').textContent = scorevalue;
    }
  } /*else if (guess !== hidden && guess > hidden) {
    if (scorevalue > 0) {
      document.querySelector('.message').textContent = 'Too High..!';
      scorevalue--;
      document.querySelector('.score').textContent = scorevalue;
    }
  }*/ else if (guess == hidden) {
    displaymessage('Correct Answer');
    // document.querySelector('.message').textContent = 'Correct Answer';
    document.querySelector('.number').textContent = hidden;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (fhighscore < scorevalue) {
      fhighscore = scorevalue;
      document.querySelector('.highscore').textContent = fhighscore;
    } else if (fhighscore > scorevalue) {
      fhighscore = fhighscore;

      document.querySelector('.highscore').textContent = fhighscore;
    }
  }
  if (!guess) {
    console.log(
      (document.querySelector('.message').textContent = 'Not a number')
    );
  }
  if (scorevalue <= 0) {
    displaymessage('You Lost..!');
    //document.querySelector('.message').textContent = `You Lost...!`;
    //return;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  hidden = Math.trunc(Math.random() * 20 + 1);
  displaymessage('Start guessing...');
  //document.querySelector('.message').textContent = 'Start guessing..';
  scorevalue = 20;
  document.querySelector('.score').textContent = scorevalue;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

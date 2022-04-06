/**
 * ToDo:
 * 1. fix error bug cannot be clicked
 * 2. put game bgm
 * 3. make game start page
 * 4. make function to change spray and hand so that player can catch bug with spray and get carrot by hand
 */

'use strict';

const carrots = document.querySelectorAll('.carrot');
let c_count = 0;
let goalCnt = 10;
let gameStatus = 'stopped';

// locate carrots and add event listenr when clicked
carrots.forEach((carrot) => {
  carrot.addEventListener('click', () => {
    console.log('carrot clicked');
    carrot.classList.toggle('inactive');
    c_count += 1;
    changeGoalTxt();
  });
});

// locate bugs and add event listner when clicked
const bugs = document.querySelectorAll('.bug');
bugs.forEach((bug) => {
  bug.addEventListener('click', () => {
    // only work when game is playing
    if (gameStatus === 'playing') {
      console.log('bug clicked');
      gameOver();
    }
    // game over
  });
});

changePosition();

const gameControlBtn = document.querySelector('.game__control-btn');
const stop = document.querySelector('.fa-stop');
const play = document.querySelector('.fa-play');

gameControlBtn.addEventListener('click', () => {
  playStopBtn();
});

// change carrots and bugs position randomly
function changePosition() {
  carrots.forEach((carrot) => {
    const x = Math.random() * 90;
    const y = Math.random() * 70;
    carrot.style.left = `${x}%`;
    carrot.style.top = `${y}%`;
  });

  bugs.forEach((bug) => {
    const x = Math.random() * 90;
    const y = Math.random() * 70;
    bug.style.left = `${x}%`;
    bug.style.top = `${y}%`;
  });
}

const timer = document.querySelector('.time');
const goalTxt = document.querySelector('.goal');

// process when game is started
function startGame() {
  console.log('start game');
  startTimer();
  gameStatus = 'playing';
  changeGoalTxt();
}

let time;

// initialize game
function initGame() {
  console.log('init game');
  clearInterval(time);
  timer.textContent = 10;
  changePosition();
  c_count = 0;
  goalCnt = 10;
}

// start timer
function startTimer() {
  let count = 10;
  time = setInterval(() => {
    count--;
    timer.textContent = `${count}`;
    if (count === 0) {
      clearInterval(time);
    }
  }, 1000);
}

// play/stop button function
function playStopBtn() {
  stop.classList.toggle('active');
  play.classList.toggle('active');

  // when pressed play button
  if (stop.classList.contains('active')) {
    startGame();
  } else {
    initGame();
  }
}

// game over page toggle
const overPage = document.querySelector('.game-over-page');

function toggleOverPage() {
  overPage.classList.toggle('off-float');
}

// to main button
const toMainBtn = document.querySelector('.over__main-btn');
toMainBtn.addEventListener('click', () => {
  toggleOverPage();
  initGame();
});

// change goal text
function changeGoalTxt() {
  // goalTxt 바꾸기
  goalTxt.textContent = `${c_count} / ${goalCnt}`;
}

// called when game is over
function gameOver() {
  toggleOverPage();
  playStopBtn();
}

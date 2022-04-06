'use strict';

const carrots = document.querySelectorAll('.carrot');
let c_count = 0;
let gameStatus = 'stopped';

// locate carrots and add event listenr when clicked
carrots.forEach((carrot) => {
  carrot.addEventListener('click', () => {
    console.log('carrot clicked');
  });
});

// locate bugs and add event listner when clicked
const bugs = document.querySelectorAll('.bug');
bugs.forEach((bug) => {
  bug.addEventListener('click', () => {
    // only work when game is playing
    if (gameStatus === 'playing') {
      console.log('bug clicked');
    }
    // game over
  });
});

changePosition();

const gameControlBtn = document.querySelector('.game__control-btn');
const stop = document.querySelector('.fa-stop');
const play = document.querySelector('.fa-play');

gameControlBtn.addEventListener('click', () => {
  stop.classList.toggle('active');
  play.classList.toggle('active');

  // when pressed play button
  if (stop.classList.contains('active')) {
    startGame();
  } else {
    initGame();
  }
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
const goal = document.querySelector('.goal');

// process when game is started
function startGame() {
  console.log('start game');
  startTimer();
  gameStatus = 'playing';
}

let time;

// initialize game
function initGame() {
  console.log('init game');
  clearInterval(time);
  timer.textContent = 10;
  changePosition();
  gameStatus = 'stopped';
  toggleOverPage();
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

// game over page toggle
const overPage = document.querySelector('.game-over-page');

function toggleOverPage() {
  overPage.classList.toggle('off-float');
}

const toMainBtn = document.querySelector('.over__main-btn');
toMainBtn.addEventListener('click', () => {
  toggleOverPage();
});

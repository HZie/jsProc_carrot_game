'use strict';

const carrots = document.querySelectorAll('.carrot');
let c_count = 0;
let gameStatus = 'stopped';

carrots.forEach((carrot) => {
  const x = Math.random() * 90;
  const y = Math.random() * 70;
  carrot.style.left = `${x}%`;
  carrot.style.top = `${y}%`;
  carrot.addEventListener('click', () => {
    console.log('carrot clicked');
  });
});

const bugs = document.querySelectorAll('.bug');
bugs.forEach((bug) => {
  const x = Math.random() * 90;
  const y = Math.random() * 70;
  bug.style.left = `${x}%`;
  bug.style.top = `${y}%`;
  bug.addEventListener('click', () => {
    if (gameStatus === 'playing') {
      console.log('bug clicked');
    }
    // game over
  });
});

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

function startGame() {
  console.log('start game');
  startTimer();
  gameStatus = 'playing';
}

let time;

function initGame() {
  console.log('init game');
  clearInterval(time);
  timer.textContent = 10;
  changePosition();
  gameStatus = 'stopped';
}

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

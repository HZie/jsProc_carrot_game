'use strict';

const carrots = document.querySelectorAll('.carrot');

carrots.forEach((carrot) => {
  const x = Math.random() * 90;
  const y = Math.random() * 70;
  carrot.style.left = `${x}%`;
  carrot.style.top = `${y}%`;
});

const bugs = document.querySelectorAll('.bug');
bugs.forEach((bug) => {
  const x = Math.random() * 90;
  const y = Math.random() * 70;
  bug.style.left = `${x}%`;
  bug.style.top = `${y}%`;
});

const gameControlBtn = document.querySelector('.game__control-btn');
const pause = document.querySelector('.fa-pause');
const play = document.querySelector('.fa-play');

gameControlBtn.addEventListener('click', () => {
  pause.classList.toggle('active');
  play.classList.toggle('active');

  // when pressed play button
  if (pause.classList.contains('active')) {
    startGame();
  } else {
    initGame();
  }
});

function startGame() {
  console.log('start game');
}

function initGame() {
  console.log('init game');
}

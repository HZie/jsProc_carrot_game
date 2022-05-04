/**
 * ToDo:
 * 3. make game start page
 * 4. make function to change spray and hand so that player can catch bug with spray and get carrot by hand
 */

'use strict';

const carrots = document.querySelectorAll('.carrot');
let c_count = 0;
let goalCnt = 10;
let gameStatus = 'stopped';
let soundStatus = 'playing';

// audio
const carrotSound = new Audio('/sound/carrot_pull.mp3');
const bgm = new Audio('/sound/bg.mp3');
const bugSound = new Audio('/sound/bug_pull.mp3');
const gameWinSound = new Audio('/sound/game_win.mp3');
const buttonSound = new Audio('/sound/alert.wav');

bgm.play();
bgm.loop = true;

// locate carrots and add event listenr when clicked
carrots.forEach((carrot) => {
  carrot.addEventListener('click', () => {
    // only work when game is playing
    if (gameStatus === 'playing') {
      console.log('carrot clicked');
      carrot.classList.toggle('inactive');
      c_count += 1;
      changeGoalTxt();
      carrotSound.play();
      if (c_count == goalCnt) {
        gameOver();
        gameWinSound.play();
      }
    }
  });
});

// locate bugs and add event listner when clicked
const bugs = document.querySelectorAll('.bug');
bugs.forEach((bug) => {
  bug.addEventListener('click', () => {
    // only work when game is playing
    if (gameStatus === 'playing') {
      console.log('bug clicked');
      bugSound.play();
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
  buttonSound.play();
});

// change carrots and bugs position randomly
function changePosition() {
  carrots.forEach((carrot) => {
    const x = Math.random() * 90;
    const y = Math.random() * 70;
    carrot.style.left = `${x}%`;
    carrot.style.top = `${y}%`;
    if (carrot.classList.contains('inactive'))
      carrot.classList.remove('inactive');
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
  changePosition();
  timer.textContent = 10;
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
  buttonSound.play();

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
  buttonSound.play();
});

// change goal text
function changeGoalTxt() {
  // goalTxt 바꾸기
  goalTxt.textContent = `${c_count} / ${goalCnt}`;
}

// called when game is over
function gameOver() {
  toggleOverPage();

  stop.classList.toggle('active');
  play.classList.toggle('active');
  if (stop.classList.contains('active')) {
    startGame();
  } else {
    initGame();
  }
}

const soundOnOffBtn = document.querySelector('#sound');

soundOnOffBtn.addEventListener('click', () => {
  buttonSound.play();
  if (soundStatus === 'playing') {
    bgm.pause();
    soundStatus = 'paused';
  } else {
    bgm.play();
    soundStatus = 'playing';
  }
});

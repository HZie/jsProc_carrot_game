'use strict';

const carrots = document.querySelectorAll('.carrot');

carrots.forEach((carrot) => {
  const x = Math.random() * 90;
  const y = Math.random() * 70;
  console.log(`${x}, ${y}`);
  carrot.style.left = `${x}%`;
  carrot.style.top = `${y}%`;
});

const bugs = document.querySelectorAll('.bug');
bugs.forEach((bug) => {
  const x = Math.random() * 90;
  const y = Math.random() * 70;
  console.log(`${x}, ${y}`);
  bug.style.left = `${x}%`;
  bug.style.top = `${y}%`;
});

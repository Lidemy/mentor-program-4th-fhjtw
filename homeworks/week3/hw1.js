function solve(lines) {
  const N = Number(lines[0]);
  for (let i = 1; i <= N; i += 1) {
    let starQueue = '';
    for (let j = 1; j <= i; j += 1) {
      starQueue += '*';
    }
    console.log(starQueue);
  }
}

const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  solve(lines);
});

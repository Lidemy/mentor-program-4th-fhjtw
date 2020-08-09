function star(n) {
  let printStars = '';
  for (let i = 1; i <= n; i += 1) {
    printStars += '*';
  }
  console.log(printStars);
}

function solve(lines) {
  const N = Number(lines[0]);
  for (let j = 1; j <= N; j += 1) {
    star(j);
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

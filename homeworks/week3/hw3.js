function isPrime(n) {
  if (n === 1) return false;
  for (let j = 2; j < n; j += 1) {
    if (n % j === 0) return false;
  }
  return true;
}


function solve(lines) {
  for (let i = 1; i <= Number(lines[0]); i += 1) {
    if (isPrime(Number(lines[i]))) { // 如果是質數為真，印出"Prime"
      console.log('Prime');
    } else {
      console.log('Composite'); // 如果不是質數，印出"Composite"
    }
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

function solve(lines) {
  for (let i = 1; i <= lines[0]; i += 1) {
    if (Number(lines[i]) === 1) {
      console.log('Composite');
    } else if (Number(lines[i]) === 2) {
      console.log('Prime');
    } else {
      let isPrime = 0;
      for (let j = 2; j < Number(lines[i]); j += 1) {
        if (Number(lines[i]) % j === 0) {
          isPrime = -1;
          break;
        }
      }
      console.log(isPrime === 0 ? 'Prime' : 'Composite');
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

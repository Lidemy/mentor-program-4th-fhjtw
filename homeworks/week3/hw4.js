/* eslint eqeqeq: 0 */
function solve(lines) {
  const origin = lines.toString();
  let compare = '';
  for (let i = origin.length - 1; i >= 0; i -= 1) {
    compare += origin[i];
  }
  if (lines == compare) {
    console.log('True');
  } else {
    console.log('False');
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

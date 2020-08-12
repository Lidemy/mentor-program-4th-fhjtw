function isPalindrome(text) {
  const origin = text.toString();
  let compare = '';
  for (let i = origin.length - 1; i >= 0; i -= 1) {
    compare += origin[i];
  }
  return origin === compare ? 'True' : 'False';
}


function solve(lines) { console.log(isPalindrome(lines)); }

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

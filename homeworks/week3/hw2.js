function solve(lines) {
  const tmp = lines[0].split('');
  const from = tmp[0];
  const end = tmp[1];
  for (let i = Number(from); i <= Number(end); i += 1) {
    const num = i.toString();
    let compare = 0;
    for (let j = 0; j < num.length; j += 1) {
      compare += Number(num[j]) ** num.length;
    }
    if (i === compare) {
      console.log(i);
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

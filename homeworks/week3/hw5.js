function compare(A, B, rule) { // rule 記得它是字串不是數字！！！！
  if (A.length === B.length) {
    for (let i = 0; i < A.length; i += 1) { // 一個一個數字由左往右做比較
      if (!(A[i] === B[i])) { // 當數字不一樣時就可以做比較
        if (rule === '1') { return A[i] > B[i] ? 'A' : 'B'; } // rule值要加上‘1’
        return A[i] < B[i] ? 'A' : 'B';
      }
    }
    return 'DRAW'; // 數字完全一樣時，輸出平手
  }
  if (!A.length === B.length || rule === '1') { return A.length > B.length ? 'A' : 'B'; } // rule值要加上‘1’
  return A.length < B.length ? 'A' : 'B';
}

function solve(lines) {
  for (let i = 1; i <= Number(lines[0]); i += 1) { // 有幾組數字要比較
    const tmp = lines[i].split(' '); // 分割每組字串，定義數字A、B與當局規則
    console.log(compare(tmp[0], tmp[1], tmp[2]));
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

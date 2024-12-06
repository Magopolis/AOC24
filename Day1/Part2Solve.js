// In Part2Solve.js
const fs = require('fs');

function parseInput(fileName) {
  const input = fs.readFileSync(fileName, 'utf8');
  return input.trim().split('\n').map(row => row.split(/\s+/).map(Number));
}

const data = parseInput('day1_input.txt');
console.log('Part 2 Data:', data);

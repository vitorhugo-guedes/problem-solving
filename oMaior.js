var input = require('fs').readFileSync('./input', 'utf8');
var lines = input.split(' ');

const [a, b, c] = lines.map(number => parseInt(number));

const bigger = (x, y) => (x + y + Math.abs(x - y)) / 2;
const res = bigger(a, b) > c ? bigger(a, b) : c;

console.log(`${res} eh o maior`);
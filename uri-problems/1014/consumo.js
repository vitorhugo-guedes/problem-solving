var input = require('fs').readFileSync('./input', 'utf-8');
var lines = input.split(' ');

const [distance, fuel] = lines.map(number => parseFloat(number));
const result = distance / fuel;
console.log(`${result.toFixed(3)} km/l`);

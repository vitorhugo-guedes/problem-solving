var input = require('fs').readFileSync('input', 'utf8');
var lines = input.split('\n');

let [cod1, quant1, val1] = lines.shift().split(' ');
let [cod2, quant2, val2] = lines.shift().split(' ');

const valTotal1 = parseFloat(quant1) * parseFloat(val1);
const valTotal2 = parseFloat(quant2) * parseFloat(val2);
const valTotalPagar = valTotal1 + valTotal2;

console.log(`VALOR A PAGAR: R$ ${valTotalPagar.toFixed(2)}`);
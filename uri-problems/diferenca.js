const lines = ['5','6','7','8'];

let [A, B, C, D] = lines;
const diferenca = (a,b,c,d) => a * b - c * d;

console.log(`DIFERENCA = ${diferenca(A,B,C,D)}`);